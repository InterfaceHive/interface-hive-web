# InterfaceHive

InterfaceHive is a platform that connects project owners with contributors, making it easier for people to access opportunities to contribute to open source or real-world applications. The platform enables users in need of assistance to receive contributions from multiple collaborators through an intuitive web interface.

## Table of Contents

- [Project Overview](#project-overview)
- [Local Setup Guide](#local-setup-guide)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Troubleshooting Guide](#troubleshooting-guide)
  - [Common Issues](#common-issues)
  - [Angular Specific Issues](#angular-specific-issues)
  - [Dependency Issues](#dependency-issues)
- [Pull Request Guidelines](#pull-request-guidelines)
  - [Branch Structure](#branch-structure)
  - [Commit Message Format](#commit-message-format)
  - [PR Review Process](#pr-review-process)

## Project Overview

InterfaceHive aims to lower the barrier of entry for contributing to projects by:
- Providing a platform where project owners can list opportunities
- Allowing contributors to find projects that match their skills
- Facilitating collaboration between multiple contributors on a single project
- Streamlining the contribution process through an intuitive interface

## Local Setup Guide

### Prerequisites

Before setting up the project locally, ensure you have the following installed:

- Node.js (v16.x or later)
- npm (v8.x or later) or Yarn (v1.22.x or later)
- Angular CLI (v15.x or later)
- Git

You can check your installed versions with:

```bash
node --version
npm --version
ng version
git --version
```

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-organization/InterfaceHive.git
   cd InterfaceHive
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
   Or if you're using Yarn:
   ```bash
   yarn install
   ```

3. Install Angular CLI globally if you haven't already:
   ```bash
   npm install -g @angular/cli
   ```

### Configuration

1. Create a local environment file:
   ```bash
   cp src/environments/environment.sample.ts src/environments/environment.ts
   ```

2. Update the environment.ts file with your local configuration values:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:4000/api',
     // Add other environment variables as needed
   };
   ```

### Running the Application

1. Start the development server:
   ```bash
   ng serve
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

3. For running with a specific configuration:
   ```bash
   ng serve --configuration=dev
   ```

4. To build the application for production:
   ```bash
   ng build --configuration=production
   ```

## Troubleshooting Guide

### Common Issues

#### "Module not found" errors
- Make sure all dependencies are installed correctly with `npm install`
- Clear the npm cache with `npm cache clean --force` and try reinstalling

#### Port already in use
If port 4200 is already in use, you can specify a different port:
```bash
ng serve --port 4201
```

#### Cannot find @angular/compiler-cli
This usually means Angular CLI wasn't installed correctly. Try:
```bash
npm install --save-dev @angular/compiler-cli
```

### Angular Specific Issues

#### Angular version mismatch
If you encounter version mismatch errors, ensure all Angular packages are on the same version:
```bash
ng update @angular/core @angular/cli
```

#### AOT compilation errors
- Check for template syntax errors in your components
- Ensure all variables used in templates are defined in the component class
- Make sure any functions called from templates don't rely on external context

### Dependency Issues

#### Node Sass binding errors
If you encounter node-sass binding issues:
```bash
npm rebuild node-sass
```

#### Peer dependency warnings
Angular has strict peer dependency requirements. Address warnings with:
```bash
npm install --legacy-peer-deps
```

## Pull Request Guidelines

### Branch Structure

- **main**: Production-ready code
- **beta**: Integration branch for testing features before production
- **feature/[feature-name]**: Development branches for new features
- **bugfix/[bug-name]**: Branches for bug fixes
- **hotfix/[issue-name]**: Emergency fixes that may go directly to main after review

All development work should be based on and merged back to the **beta** branch, not main.

### Commit Message Format

Follow this format for commit messages:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code functionality (formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Code change that improves performance
- **test**: Adding or correcting tests
- **chore**: Changes to build process or auxiliary tools

Example:
```
feat(auth): implement user authentication

- Add login component
- Create authentication service
- Implement JWT token storage

Resolves: #123
```

### PR Review Process

1. Create a feature branch from beta:
   ```bash
   git checkout beta
   git pull
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and push to your branch:
   ```bash
   git add .
   git commit -m "feat(component): add new feature"
   git push origin feature/your-feature-name
   ```

3. Create a Pull Request to the beta branch (NOT main)

4. Requirements for merging:
   - At least 1 approved review is required
   - All CI checks must pass
   - No merge conflicts
   - PR description must clearly explain the changes and reference any related issues

5. After approval, the PR can be merged into beta

6. Regular releases will merge beta into main after thorough testing

Remember, never merge directly to main. All changes must go through beta first.
