# Product charter

FrameWeft helps people turn local recordings, videos, and images into a finished video without
learning a broadcast studio or a large editing suite. It is an MIT-licensed desktop application
targeting Windows, macOS, and Linux.

## Workspaces

- **Record** captures a selected display, application window, or user-defined region. A top-of-screen
  control bar handles recording state. For each supported capture mode, the recording must exclude
  that bar. Users can save a recording or add it to an editing project.
- **Edit video** opens a project and imports local media independently of recording. Its core workflow
  combines multiple clips, adds captions, saves the editable project, and exports a finished video.
- **Edit images** opens and exports local images independently. An edited image can also be added
  to a video project.

## Design requirements

- Keep workspace navigation available without discarding active work.
- Use shared typography, spacing, colors, and control states from the first prototype. Give each
  workspace a layout suited to its main task.
- Keep everyday actions visible and reveal advanced controls alongside the selected object.
- Review UI changes against a real task, including keyboard focus, resizing, and loading, empty,
  and error states.

## Delivery milestones

| Milestone | Planned outcome |
| --- | --- |
| Foundation | Document product scope, candidate architecture, contribution rules, and CI. |
| Prototypes | Walk through the recording and editing flows. Validate the hardest capture and media processing constraints on target platforms. |
| Editing alpha | Import several clips, arrange them, add captions, save and reopen the project, and export a video. |
| Integrated preview | Add a validated recording workflow, workspace handoff, and a basic image workflow. |
| Expanded editing | Add user-created title cards, annotated freeze frames, keyframes, and broader local asset support. |
| Release candidate | Verify installation and core workflows on each declared supported platform. |

The milestones state intent. Publish supported operating systems, capture modes, and media formats
as they pass validation.
