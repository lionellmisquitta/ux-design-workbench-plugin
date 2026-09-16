# Workflow and phase gates

## Phase A — Evidence and UX architecture

Capture only what changes the product experience:

- intended outcome and success signals;
- actors, roles, permissions, frequency, expertise, and environment;
- primary jobs and critical journeys;
- content and data needed for decisions;
- edge, empty, loading, error, stale, conflict, success, and recovery states;
- accessibility, device, localization, privacy, and operational constraints;
- information architecture, navigation model, interaction archetypes, and layout archetypes.

For brownfield work, separate findings into **retain**, **repair**, **replace**, and **investigate**. Evidence from the working application outranks assumptions. Do not erase familiar behavior solely to modernize its appearance.

The UX baseline is ready when downstream UI work can proceed without inventing workflow, navigation, permissions, or state behavior.

## Phase B — Atlas decision

Map the baseline to Guided Selector inputs. Domain reflects operating context; primary job reflects dominant repeated behavior; platform reflects the primary interaction environment; accessibility is a constraint; density reflects task frequency and information load; visual freedom reflects governance and brand tolerance.

Recommend inputs with reasons. Do not select a system because it is fashionable or select a style independently of the system and UX constraints.

The Atlas decision is ready when the user has inspected representative layouts and returned a valid Theme Manifest, ideally with `decision.status` set to `locked`.

## Phase C — UI direction and production

Translate the UX baseline and Theme Manifest into semantic tokens and component rules. Resolve any incompatibility explicitly. A visual choice must not rewrite the user journey.

Before completion, inspect representative desktop, tablet, and mobile widths when relevant. Verify keyboard access, focus visibility, contrast, content wrapping, overflow, touch targets, interaction states, and reduced motion.

## Change control

If UI work reveals a material UX gap, label it `UX CHANGE REQUEST`, describe the affected baseline decision, impact, and recommended resolution, and obtain confirmation before changing it.
