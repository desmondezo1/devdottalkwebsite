# Contributing to dev.talk Website

Thank you for your interest in contributing to the dev.talk website! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find that the bug has already been reported. When you are creating a bug report, please include as many details as possible:

- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful to most users
- List some other applications where this enhancement exists, if applicable

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the JavaScript and CSS styleguides
- Include thoughtfully-worded, well-structured tests
- Document new code
- End all files with a newline

## Development Workflow

### Setting Up the Development Environment

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/devdottalkwebsite.git`
3. Navigate to the project directory: `cd devdottalkwebsite`
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`

### Branching Strategy

- `main` - production-ready code
- `develop` - development branch, all feature branches are merged here
- `feature/feature-name` - for new features
- `bugfix/bug-name` - for bug fixes
- `hotfix/fix-name` - for critical fixes to production

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - a new feature
- `fix:` - a bug fix
- `docs:` - documentation only changes
- `style:` - changes that do not affect the meaning of the code
- `refactor:` - a code change that neither fixes a bug nor adds a feature
- `perf:` - a code change that improves performance
- `test:` - adding missing tests or correcting existing tests
- `chore:` - changes to the build process or auxiliary tools

Example: `feat: add new sponsor section to homepage`

### Testing

Before submitting a pull request, please make sure your changes pass all tests:

```bash
npm run test
```

### Code Style

We use ESLint and Prettier to maintain code quality. Please ensure your code follows our style guidelines:

```bash
npm run lint
```

To automatically fix linting issues:

```bash
npm run lint:fix
```

## Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── components/ # React components
│   │   ├── about/      # About page
│   │   ├── blog/       # Blog page
│   │   ├── contact/    # Contact page
│   │   ├── sponsors/   # Sponsors page
│   │   └── ...         # Other pages
│   └── ...
└── ...
```

## Getting Help

If you need help with anything related to the project, please:

1. Check the documentation
2. Search for existing issues
3. Create a new issue with a clear description of your problem or question

## Thank You!

Your contributions to open source, large or small, make projects like this possible. Thank you for taking the time to contribute.
