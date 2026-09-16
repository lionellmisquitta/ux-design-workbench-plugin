# UX Design Workbench

A free, portable plugin connecting three decisions that are often muddled together:

1. **UX architecture** — workflow, information, states, navigation, permissions, and responsive priorities.
2. **Design System Atlas** — system, visual style, typography, palette, density, and shell selection.
3. **UI direction** — semantic tokens, components, representative screens, implementation, and visual QA.

Open the public Atlas: https://lionellmisquitta.github.io/design-system-atlas/

## Current edition

Version 1.0 uses a browser handoff. The plugin provides a clickable Atlas link; the user explores the Atlas and returns its Theme Manifest JSON. No account, API key, paid service, or MCP server is required.

The Atlas is not embedded in chat in this edition. A future MCP-enabled edition can return the Theme Manifest automatically.

## Install in Codex

```bash
codex plugin marketplace add lionellmisquitta/ux-design-workbench-plugin
codex plugin add ux-design-workbench@lionell-ux-tools
```

Restart the supported client and begin a new conversation. Example:

```text
Use the UX Design Workbench to architect and visually direct a procurement application.
```

## Install in Claude Code

Clone or download the repository, then test it directly:

```bash
claude --plugin-dir ./ux-design-workbench-plugin
```

Invoke the skill as:

```text
/ux-design-workbench:ux-design-workbench
```

Claude Code also accepts the release ZIP with `--plugin-dir`.

## User workflow

1. Describe a new product or provide an existing application, screenshots, or repository.
2. The skill produces and locks a UX baseline.
3. Open the Atlas using the link supplied by the skill.
4. Complete Guided Selector and inspect the standard layout previews.
5. Finalize typography and palette.
6. Export a Theme Manifest from **Handoff Contracts**.
7. Return the JSON file to the conversation.
8. The skill validates it and produces the visual baseline, screens, or implementation.

## Repository contents

- `plugin.json` — portable Agent Plugins manifest
- `.codex-plugin/plugin.json` — Codex compatibility manifest
- `.claude-plugin/plugin.json` — Claude Code compatibility manifest
- `skills/ux-design-workbench/` — workflow and decision contracts
- `scripts/validate-theme-manifest.js` — dependency-free manifest validator
- `.agents/plugins/marketplace.json` — GitHub-installable Codex marketplace

## Validate a Theme Manifest

```bash
node scripts/validate-theme-manifest.js path/to/theme-manifest.json
```

## License

MIT © 2026 Lionell Misquitta
