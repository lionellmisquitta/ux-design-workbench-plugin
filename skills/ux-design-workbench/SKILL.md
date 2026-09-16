---
name: ux-design-workbench
description: Architect or review a greenfield or brownfield product experience, guide the user through the public Design System Atlas, validate its Theme Manifest, and turn the locked UX and visual direction into implementation-ready UI. Use for application UX, redesigns, workflows, dashboards, forms, portals, product interfaces, design-system selection, or UI implementation that needs defensible UX and visual decisions. Do not use for visual styling alone when the UX is already locked and no Atlas selection is requested.
---

# UX Design Workbench

Connect three distinct decisions without collapsing their authority:

1. UX architecture defines what the experience must do.
2. The Design System Atlas defines the selected visual and system direction.
3. UI direction renders both into a coherent interface or implementation.

Explicit user instructions and supplied product evidence always take precedence over this workflow.

## Resolve the mode

Choose the smallest appropriate mode:

- **Greenfield:** derive the experience from outcomes, actors, tasks, constraints, content, and evidence.
- **Brownfield:** inspect the existing application, screenshots, code, analytics, feedback, and conventions before proposing change. Preserve working behavior unless the user authorizes a change.
- **Manifest-first:** when the user supplies a Theme Manifest and locked UX baseline, validate them and begin UI direction without repeating discovery.

Read [references/workflow.md](references/workflow.md) for detailed phase gates.

## Required workflow

### 1. Lock the UX baseline

Establish the outcome, primary actors, critical jobs, constraints, information architecture, navigation, journeys, states, permissions, responsive priorities, and accessibility target. Select interaction and layout archetypes from explicit criteria.

Do not select a design system, visual style, typography, or palette before consequential UX decisions are stable. Ask only questions whose answers materially change the architecture; record lesser uncertainty as assumptions.

### 2. Route to the Atlas

Present this clickable link:

[Open the Design System Atlas](https://lionellmisquitta.github.io/design-system-atlas/)

Explain that this edition opens in the user's browser; it is not embedded and no download is needed to explore it. Translate the locked UX into suggested Guided Selector inputs, explain the rationale, and leave the final choice to the user.

Ask the user to complete Guided Selector, inspect the system/style rationale, choose typography and palette, review Selection Highlights and Screen Compare, then open **Handoff Contracts**, generate a **Theme Manifest**, and return the downloaded JSON file or pasted JSON.

Read [references/atlas-handoff.md](references/atlas-handoff.md) when routing to or returning from the Atlas.

### 3. Validate and lock the visual direction

Validate any supplied Theme Manifest before treating it as authoritative. If Node.js and file access are available, run:

```bash
node scripts/validate-theme-manifest.js <manifest.json>
```

Otherwise inspect it using [references/theme-manifest-contract.md](references/theme-manifest-contract.md). Do not silently replace unknown IDs, invalid colors, missing custom-palette tokens, or a draft decision with invented values. A draft may guide exploration; only a locked manifest is authoritative.

Explain why the selected system and style fit the UX baseline, including conflicts or adaptation requirements. Typography and palette remain separate decisions.

### 4. Direct and implement the UI

Preserve the locked workflow, states, hierarchy, navigation, permissions, and layout archetypes. Apply the manifest through semantic tokens rather than copying branded components or claiming framework fidelity.

Define typography, color roles, spacing, density, surfaces, component character, icon language, responsive transformation, motion restraint, and accessibility treatment. When the host provides a dedicated UI design skill, use it for this phase without reopening locked UX decisions.

When implementation is requested, inspect the existing stack and conventions first. Produce complete runnable output, test meaningful interactions and responsive states, and report validation honestly.

## Completion package

Return, proportionate to the task:

- UX baseline and material assumptions;
- Atlas selection and pairing rationale;
- validated Theme Manifest status;
- visual-design baseline or semantic tokens;
- representative screens or implemented interface;
- responsive, accessibility, and interaction QA evidence;
- unresolved decisions and explicit change requests.

Never imply that the browser Atlas returned data automatically. Native in-chat handoff requires the separate MCP-enabled edition.
