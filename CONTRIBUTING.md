# Contributing to EMS (Education Management System)

First of all, thank you for considering contributing to **EMS**! We welcome contributions to improve the project. By following the guidelines below, you will help us maintain the quality and consistency of the codebase.

## How to Contribut

### 1. **Fork the Repository**

To get started, fork the repository to your GitHub account by clicking the **Fork** button at the top-right of the project page.

### 2. **Clone Your Fork**

Clone your forked repository to your local machine:

```bash
git clone https://github.com/your-username/ems.git
cd ems
```

### 3. **Create a New Branch**

Create a new branch for the feature or fix you plan to work on. This ensures that your changes are isolated, making it easier for us to review them.

```bash
git checkout -b feature/your-feature-name
```

Or for bug fixes:

```bash
git checkout -b bugfix/issue-description
```

### 4. **Make Your Changes**

Make your changes according to the coding standards, making sure to:

- Write clean, readable, and well-documented code.
- Follow existing code formatting and structure.
- Add tests where necessary (especially for critical features or fixes).

### 5. **Commit Your Changes**

Commit your changes with a clear, descriptive message:

```bash
git add .
git commit -m "Fix: Your detailed message about the fix"
```

Use present tense and concise messages, e.g., `Fix bug in user login flow` or `Add feature for exporting student records`.

### 6. **Push Your Changes**

Push your changes to your forked repository:

```bash
git push origin feature/your-feature-name
```

### 7. **Create a Pull Reques**

Open a pull request (PR) from your fork's branch to the **main** branch of the EMS repository. Provide a clear description of what you've changed and why. If it's a bug fix or feature request, reference the relevant issue (if any).

To open a PR:

1. Go to the **Pull Requests** tab on the original repository.
2. Click **New Pull Request**.
3. Select your branch and compare it with the base branch (`main`).
4. Add a description of the changes and submit the PR.

### 8. **Respond to Code Reviews**

Once your PR is submitted, one of the maintainers will review your changes. Please be open to feedback and make the necessary updates. If your PR requires changes, update your branch and push the changes again.

```bash
git add .
git commit --amend
git push --force
```

### 9. **Merge the PR**

Once the pull request passes review and any necessary checks, it will be merged into the main branch.

## Code of Conduct

Please follow the [**Code of Conduct**](https://www.notion.so/Contributing-to-EMS-Education-Management-System-1dd60c77722d804a8f39c79f9cf223ef?pvs=21) when contributing. Treat everyone with respect, kindness, and inclusivity. We expect contributors to maintain a collaborative and positive environment.

## Pull Request Guidelines

1. **Descriptive Commit Messages**: Each commit message should describe what has been changed and why.
2. **Modular Code**: Ensure your code is modular and doesn't introduce unnecessary complexity. Break large tasks into smaller pieces.
3. **Consistent Code Style**: Follow the project's code style for consistency. If unsure, check existing code.
4. **Testing**: If applicable, add or update tests to verify your changes. Ensure that all tests pass before submitting a PR.
5. **Documentation**: Update the README or any relevant documentation if necessary to reflect changes.

## Reporting Bugs or Issues

If you encounter a bug or issue, please follow these steps:

1. **Search the Issues**: Check if the issue is already reported by someone else.
2. **Open a New Issue**: If it's a new issue, open a new bug report in the **Issues** tab. Please include:
    - A clear description of the problem.
    - Steps to reproduce the issue.
    - Expected and actual behavior.
    - Screenshots or error logs, if applicable.
    - The environment (e.g., browser version, operating system, etc.).

## Feature Requests

If you have an idea for a new feature or improvement, please open an issue with a detailed description of the feature and how it will enhance the project. We encourage suggestions that will improve the usability and functionality of the system.

## Style Guide

### 1. **JavaScript/React**

- Use **ES6**+ features.
- Write clean, readable code with **descriptive variable names**.
- Use **arrow functions** where applicable.

### 2. **Styling (Tailwind CSS)**

- Follow the **Tailwind CSS** best practices for class naming and organization.
- Avoid writing custom CSS unless absolutely necessary.
- Use **utility-first** approach where possible.

### 3. **Testing**

- Write unit tests for any new functionality.
- Ensure that your changes do not break existing features by running the full test suite before submitting a PR.

## Development Environment Setup

1. Clone the repository to your local machine.
2. Install dependencies using `npm`:
    
    ```bash
    npm install
    ```
    
3. Start the development server:
    
    ```bash
    npm run dev
    ```
    
4. For testing purposes, use tools like **Jest**, **React Testing Library**, or other frameworks that you are familiar with.

---

## Thank You!

Thank you for contributing to **EMS**! We appreciate your effort in improving the project. Please feel free to reach out with any questions or suggestions.