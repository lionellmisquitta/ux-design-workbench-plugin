#!/usr/bin/env node
'use strict';

const fs = require('fs');
const file = process.argv[2];

if (!file) {
  console.error('Usage: node scripts/validate-theme-manifest.js <manifest.json>');
  process.exit(2);
}

let manifest;
try {
  manifest = JSON.parse(fs.readFileSync(file, 'utf8'));
} catch (error) {
  console.error(`INVALID: ${error.message}`);
  process.exit(1);
}

const errors = [];
const requiredPaletteTokens = [
  'primary', 'onPrimary', 'secondary', 'onSecondary', 'accent', 'onAccent',
  'background', 'foreground', 'surface', 'onSurface', 'muted',
  'mutedForeground', 'border', 'destructive', 'onDestructive', 'focusRing'
];

if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) errors.push('Root must be a JSON object.');
if (manifest.kind !== 'design-atlas-theme-manifest') errors.push('kind must be design-atlas-theme-manifest.');
if (!String(manifest.schemaVersion || '').startsWith('1.')) errors.push('schemaVersion must be compatible with 1.x.');

const selection = manifest.selection;
if (!selection || typeof selection !== 'object') {
  errors.push('selection is required.');
} else {
  if (!selection.designSystem || !(selection.designSystem.id || selection.designSystem.name)) errors.push('selection.designSystem identity is required.');
  if (!selection.visualStyle || !(selection.visualStyle.id || selection.visualStyle.name)) errors.push('selection.visualStyle identity is required.');
  if (!selection.typography || !selection.typography.source) errors.push('selection.typography.source is required.');
  if (!selection.palette || !selection.palette.source) errors.push('selection.palette.source is required.');
  if (selection.palette && selection.palette.source === 'custom') {
    for (const token of requiredPaletteTokens) {
      if (!selection.palette.tokens || typeof selection.palette.tokens[token] !== 'string' || !selection.palette.tokens[token].trim()) {
        errors.push(`selection.palette.tokens.${token} is required for a custom palette.`);
      }
    }
  }
  if (!['Compact', 'Comfortable', 'Spacious'].includes(selection.density)) errors.push('selection.density must be Compact, Comfortable, or Spacious.');
  if (!['Light', 'Dark'].includes(selection.shell)) errors.push('selection.shell must be Light or Dark.');
}

if (manifest.decision && manifest.decision.status && !['draft', 'locked', 'superseded'].includes(manifest.decision.status)) {
  errors.push('decision.status must be draft, locked, or superseded.');
}

if (errors.length) {
  console.error(JSON.stringify({valid: false, errors}, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  valid: true,
  status: manifest.decision && manifest.decision.status ? manifest.decision.status : 'unspecified',
  atlasVersion: manifest.atlasVersion || 'unspecified',
  designSystem: selection.designSystem.name || selection.designSystem.id,
  visualStyle: selection.visualStyle.name || selection.visualStyle.id
}, null, 2));
