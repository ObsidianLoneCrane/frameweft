# Architecture

FrameWeft is planned as a single local-first desktop application with built-in recording, video
editing, and image editing workspaces. This document describes the candidate design.

## Shared application and native services

- Share navigation, UI components, document models, and editing logic across operating systems.
- Keep capture APIs, permission handling, and OS-specific behavior behind native platform adapters.
- Give each workspace a standalone output and use a shared local media reference when transferring
  an output into a project. Use versioned project files with a strategy for locating moved media.
- Keep recording, preview, and export boundaries explicit. Verify preview and export agreement
  using representative video, image, and caption fixtures.

Tauri 2, Vue, TypeScript, and Rust are the initial candidates. Evaluate the stack in prototypes
before committing to it. Candidate capture paths include Windows Graphics Capture on Windows,
ScreenCaptureKit on macOS, and the ScreenCast portal with PipeWire under Linux Wayland.

## Validation and distribution

Use desktop sessions on each target platform to verify display and window capture, permission and
cancellation behavior, and the saved file. Check that a visible recording control bar is absent
from the output and that the scene underneath remains visible. Where a capture mode is unverified,
list its status explicitly in the support documentation. A successful build establishes packaging
and compilation status only.

Check the actual components included in each distributed installer. Track third-party notices and
verify redistribution terms for media libraries, binaries, fonts, icons, and sample assets.
If FFmpeg is bundled, review its build configuration and its enabled dependencies before publishing.
See the [FFmpeg legal information](https://ffmpeg.org/legal.html).
