# Design System Atlas browser handoff

Public Atlas: https://lionellmisquitta.github.io/design-system-atlas/

## What happens

The link opens a public GitHub Pages application in the user's browser. The Atlas executes in the browser. Users do not download data before exploring it.

The agent provides suggested Guided Selector inputs from the UX baseline and explains why. The user explores the previews, makes the decision, and exports JSON from **Handoff Contracts**.

## Returning to the agent

The user returns either a downloaded Theme Manifest JSON file, pasted Theme Manifest JSON, or named selections when file transfer is unavailable. The first two are deterministic. Named selections are acceptable for exploration but must be marked `unverified` until represented by a valid manifest.

## Privacy boundary

The plugin does not transmit the user's product evidence to the Atlas. The public page may request selected Google Fonts and follows the privacy statement published with the plugin. The browser handoff is not an MCP connection and cannot automatically return selections to the conversation.
