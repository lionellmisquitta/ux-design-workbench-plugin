# Theme Manifest contract v1

Treat a manifest as valid only when:

- the root is a JSON object;
- `kind` is `design-atlas-theme-manifest`;
- `schemaVersion` begins with `1.`;
- `selection.designSystem` and `selection.visualStyle` are present;
- typography declares a source and identity or `system-default`;
- palette declares a source and identity, or `system-native`;
- a custom palette embeds all required semantic tokens;
- `selection.density` is `Compact`, `Comfortable`, or `Spacious`;
- `selection.shell` is `Light` or `Dark`;
- `decision.status`, when present, is `draft`, `locked`, or `superseded`.

Required custom-palette tokens:

`primary`, `onPrimary`, `secondary`, `onSecondary`, `accent`, `onAccent`, `background`, `foreground`, `surface`, `onSurface`, `muted`, `mutedForeground`, `border`, `destructive`, `onDestructive`, `focusRing`.

## Authority

- `draft`: exploratory input; surface unresolved choices.
- `locked`: authoritative visual decision unless the user changes it.
- `superseded`: preserve for history but do not apply.

The UX baseline governs behavior and structure. The Theme Manifest governs visual/system direction. When they conflict, explain the conflict instead of silently privileging either one.
