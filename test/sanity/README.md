# BillAI Release Sanity Check Tests

## Overview

Automated end-to-end release sanity tests for published BillAI builds.
These tests verify critical functionality across different platforms and installation methods,
ensuring that published builds meet quality standards before reaching end users.

See [Sanity Check wiki page](https://github.com/microsoft/vscode/wiki/Sanity-Check) for more details on sanity testing.

## Usage

Many tests will use the underlying platform to install and verify basic BillAI functionality.
Such tests will need to be run on the corresponding target OS/virtual machine and will fail if ran outside.
Use -g or -f command-line options to filter tests to match the host platform.

### Command-Line Options

| Option | Alias | Description |
|--------|-------|-------------|
| `--commit <commit>` | `-c` | The commit SHA to test (required) |
| `--quality <quality>` | `-q` | The quality to test (required, "stable", "insider" or "exploration") |
| `--no-cleanup` | | Do not cleanup downloaded files after each test |
| `--grep <pattern>` | `-g` | Only run tests matching the given regex pattern |
| `--fgrep <string>` | `-f` | Only run tests containing the given string |
| `--help` | `-h` | Show help message |

### Example

To run CLI tests for all platforms on given commit of Insiders build, from the root directory run:

```bash
npm run sanity-test -- --commit 19228f26df517fecbfda96c20956f7c521e072be --quality insider -g "cli*"
```

## References

The following public documentation pages provide details on end-user BillAI setup scenarios.

- [Setup Overview](https://billai.dev/docs/setup/setup-overview)
- [Linux Setup](https://billai.dev/docs/setup/linux)
- [macOS Setup](https://billai.dev/docs/setup/mac)
- [Windows Setup](https://billai.dev/docs/setup/windows)
- [Portable Mode](https://billai.dev/docs/editor/portable)
- [BillAI Server](https://billai.dev/docs/remote/vscode-server)
- [Developing in WSL](https://billai.dev/docs/remote/wsl)
