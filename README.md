<h1 align="center">
    <p align="center">Website</p>
    <a href="https://oxidizer-rs.github.io"><img src="https://repository-images.githubusercontent.com/285142981/5bf7eb80-e019-11ea-9121-8b23151b4947" alt="Website"></a>
</h1>

<p align="center">
    <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Foxidizer-rs.github.io">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/oxidizer-rs/website/deploy">
    <a href="https://github.com/oxidizer-rs/website/blob/dev/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/oxidizer-rs/website"></a>
    <a href= "https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"></a>
</p>

## Introduction

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory.

## Deployment

The website is automatically deployed to the branch `gh-pages` on repository `oxidizer-rs.github.io` each time the `main` branch receives a new push. The GitHub Action workflow file is stored at `.github/workflows/deploy.yml.`

## Contributing

There are a couple of ways in which you can contribute to the website, for example:

- [Submit bugs and feature requests](https://github.com/oxidizer-rs/website/issues), and help us verify as they are checked in.
- Review the [website](https://oxidizer-rs.github.io) and make pull requests for anything from typos to new content suggestion.
