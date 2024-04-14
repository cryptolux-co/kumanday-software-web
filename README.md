# Astro App

## Introduction

This repository contains an Astro-based application. Astro is a modern framework for building fast, content-focused websites.

## Prerequisites

Before you begin, ensure you have `nvm` (Node Version Manager) installed to manage your Node.js versions. It's recommended to use `nvm` for a smoother development experience with version control for Node.js.

### Node Version Setup

1. If you haven't installed the Node version specified in the `.nvmrc` file, simply run:

```bash
nvm install
```

This command will automatically install the required Node.js version.

2. To switch to the Node version specified in the `.nvmrc` file, run:

```bash
nvm use
```

This command will automatically switch to the required Node.js version.

## Yarn Setup

Ensure you have Yarn installed and set up by following these steps:

1. Enable Corepack to manage Yarn versions:

```bash
corepack enable
```

2. Prepare and activate the specified Yarn version:

```bash
corepack prepare yarn@4.1.1 --activate
```

This command will prepare and activate the specified Yarn version.

## Development

To start the development server, run:

```bash
yarn run dev
```

This will start the development server and you can access your app at `http://localhost:4200`.

## Building

To build the app locally, run:

```bash
yarn run build
```

This will generate the production-ready build in the `dist` directory.

## Previewing the Build

To preview the production build, run:

```bash
yarn run preview
```

This will start a local server and you can preview your built app at `http://localhost:4200`.
