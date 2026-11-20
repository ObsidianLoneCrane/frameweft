# Contributing to FrameWeft

Read the [product charter](docs/product-charter.md) and the
[architecture proposal](docs/architecture.md) for scope and current status. Use an issue to
discuss substantial product changes or new platform requirements before implementation.

## Development workflow

1. Start a focused feature branch from an updated `develop`. Start a repair from the affected
   branch. Follow the [branch and release guide](docs/branching-and-releases.md).
2. Keep commits focused and use English for project documentation, code comments, source UI strings,
   commits, and pull requests. Keep user-supplied media and text as supplied.
3. Update relevant documentation in the same change. Document implemented behavior, planned work,
   and any platform capability that still needs verification.
4. Run relevant checks and record the actual results in the pull request. For UI changes, include
   a screenshot or short recording of the changed workflow and list the platforms tested.
5. Push the branch and open the pull request on GitHub. The maintainer reviews and merges it there.

Use synthetic or redistributable fixtures for media tests. Keep personal recordings, credentials,
downloaded tools, caches, and build output out of Git.

## Foundation checks

Use Node.js 22 or later and Git from the repository root:

```sh
node scripts/check-docs.mjs
git diff --check HEAD
```

Run these checks alongside a review for clear English, valid links, and current project status.
See the [CI workflow](.github/workflows/ci.yml) for the check run by GitHub Actions.
