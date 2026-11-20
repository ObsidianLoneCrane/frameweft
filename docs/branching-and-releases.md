# Branching and releases

## Branches

| Branch | Role | Pull request route |
| --- | --- | --- |
| `main` | Stable versions | Receives accepted releases and fixes for published versions. |
| `develop` | Next-version integration | Receives features and development fixes. |
| `release` | Candidate stabilization | Receives a selected development snapshot and candidate fixes. |
| `feature/*` | Focused feature or foundation work | Start from `develop` and target `develop`. |
| `fix/*` | Focused repair | Start from and target the affected long-lived branch. |

Use descriptive English branch names, optionally including an issue number. Good examples are
`feature/project-foundation` and `fix/24-export-audio-sync`. Prefer squash merges for short-lived
branches and merge commits when synchronizing long-lived branches.

The maintainer creates and merges pull requests on GitHub. Protect the three long-lived branches
with required pull requests and status checks. Add required checks after they have run and their
names can be confirmed.

## CI and release delivery

The [foundation workflow](../.github/workflows/ci.yml) checks Markdown whitespace and inline
repository-relative link targets. It runs on pull requests to the long-lived branches and on pushes
to those branches. Native builds, installer verification, and release automation are planned.

1. Promote the chosen `develop` snapshot to `release` through a pull request.
2. Tag a candidate, such as `v0.1.0-rc.1`, on the release branch. Verify clean installation and
   core workflows on the supported operating systems. Apply candidate fixes through targeted PRs.
3. Merge the accepted `release` candidate into `main` and tag the accepted commit, such as `v0.1.0`.
4. Build and sign platform packages from the version tag, generate checksums, and prepare a draft
   GitHub Release. The maintainer verifies the assets, release notes, and platform support before
   publishing. Store signing credentials in a protected release environment.
5. Synchronize accepted fixes and release commits into the affected long-lived branches through
   pull requests. Issue a new version for a published fix.
