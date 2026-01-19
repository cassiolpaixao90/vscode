# BillAI - Open Source ("Code - OSS")
[![Feature Requests](https://img.shields.io/github/issues/BillAI/billai/feature-request.svg)](https://github.com/BillAI/billai/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
[![Bugs](https://img.shields.io/github/issues/BillAI/billai/bug.svg)](https://github.com/BillAI/billai/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug)

## The Repository

This repository ("`Code - OSS`") is where the BillAI team develops the [BillAI](https://billai.dev) product together with the community. This source code is available to everyone under the standard [MIT license](LICENSE.txt).

## BillAI

[BillAI](https://billai.dev) is a distribution of the `Code - OSS` repository with BillAI-specific defaults and packaging.

[BillAI](https://billai.dev) combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle. It provides comprehensive code editing, navigation, and understanding support along with lightweight debugging, a rich extensibility model, and lightweight integration with existing tools.

BillAI is updated regularly with new features and bug fixes. You can download it for Windows, macOS, and Linux on [BillAI's website](https://billai.dev/Download).

## Contributing

There are many ways in which you can participate in this project, for example:

* [Submit bugs and feature requests](https://github.com/BillAI/billai/issues), and help us verify as they are checked in
* Review [source code changes](https://github.com/BillAI/billai/pulls)
* Review the documentation and make pull requests for anything from typos to additional and new content

If you are interested in fixing issues and contributing directly to the code base,
please see the document [How to Contribute](CONTRIBUTING.md), which covers the following:

* How to build and run from source
* The development workflow, including debugging and running tests
* Coding guidelines
* Submitting pull requests
* Finding an issue to work on
* Contributing to translations

## Feedback

* Ask a question on [Stack Overflow](https://stackoverflow.com)
* [Request a new feature](CONTRIBUTING.md)
* Upvote [popular feature requests](https://github.com/BillAI/billai/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
* [File an issue](https://github.com/BillAI/billai/issues)
* Connect with the extension author community on [GitHub Discussions](https://github.com/BillAI/billai/discussions)
* Follow [@code](https://x.com/code) and let us know what you think!

See our [wiki](https://github.com/BillAI/billai/wiki/Feedback-Channels) for a description of each of these channels and information on some other available community-driven channels.

## Related Projects

Many of the core components and extensions to BillAI live in their own repositories on GitHub. For a complete list, please visit the [Related Projects](https://github.com/BillAI/billai/wiki/Related-Projects) page on our [wiki](https://github.com/BillAI/billai/wiki).

## Bundled Extensions

BillAI includes a set of built-in extensions located in the [extensions](extensions) folder, including grammars and snippets for many languages. Extensions that provide rich language support (inline suggestions, Go to Definition) for a language have the suffix `language-features`. For example, the `json` extension provides coloring for `JSON` and the `json-language-features` extension provides rich language support for `JSON`.

## Development Container

This repository includes a BillAI Dev Containers / GitHub Codespaces development container.

* For [Dev Containers](https://aka.ms/vscode-remote/download/containers), use the **Dev Containers: Clone Repository in Container Volume...** command which creates a Docker volume for better disk I/O on macOS and Windows.
  * If you already have BillAI and Docker installed, you can also click [here](https://billai.dev/redirect?url=billai://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/BillAI/billai) to get started. This will cause BillAI to automatically install the Dev Containers extension if needed, clone the source code into a container volume, and spin up a dev container for use.

* For Codespaces, install the [GitHub Codespaces](https://open-vsx.org/vscode/item?itemName=GitHub.codespaces) extension in BillAI, and use the **Codespaces: Create New Codespace** command.

Docker / the Codespace should have at least **4 Cores and 6 GB of RAM (8 GB recommended)** to run a full build. See the [development container README](.devcontainer/README.md) for more information.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).

## License

Copyright (c) BillAI. All rights reserved.

Licensed under the [MIT](LICENSE.txt) license.
