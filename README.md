# Playwright UI & API Automation Portfolio

[![Playwright Tests](https://github.com/MeirTl/playwright-qa-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/MeirTl/playwright-qa-automation/actions/workflows/playwright.yml)
[![Playwright](https://img.shields.io/badge/Framework-Playwright-2EAD33.svg)](https://playwright.dev/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


Portfolio project for practicing **UI automation**, **API mocking**, and basic **QA documentation** with Playwright.

The project uses a local demo **Task Manager** application and demonstrates a small but structured automation framework suitable for a Junior QA Automation portfolio.

---

## Project Goal

The goal of this repository is to show practical QA automation skills:

- writing readable automated tests;
- organizing tests with Page Object Model;
- covering positive and negative scenarios;
- using Playwright reports and failure artifacts;
- running tests through GitHub Actions;
- documenting test scenarios and QA artifacts.

This is a learning portfolio project, not a production-grade framework.

---

## What Is Covered

- Login flow
- Invalid login validation
- Task creation
- Task deletion
- Form validation
- Basic regression checks
- Cross-browser execution
- Task titles containing HTML are rendered as literal text

`tests/api-demo.spec.js` currently contains a request-interception placeholder;
the demo app does not call an API, so this is not verified API coverage.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| **Playwright** | UI automation and browser testing |
| **JavaScript** | Test implementation |
| **Page Object Model** | Test structure and maintainability |
| **GitHub Actions** | CI test execution |
| **ESLint / Prettier** | Code quality and formatting |
| **http-server** | Local demo app hosting |

---

## Project Structure

```text
playwright-qa-automation/
├── .github/workflows/      # GitHub Actions workflow
├── demo-site/              # Local Task Manager demo app
├── pages/                  # Page Object Model classes
├── tests/                  # UI and API mocking tests
├── docs/                   # QA documentation
├── playwright.config.js    # Playwright configuration
├── package.json            # Scripts and dependencies
└── README.md
```

---

## Setup

Clone the repository:

```bash
git clone https://github.com/MeirTl/playwright-qa-automation.git
cd playwright-qa-automation
```

Install dependencies:

```bash
npm install
npx playwright install
```

---

## Run Demo App

```bash
npm run serve
```

Open:

```text
http://127.0.0.1:3000
```

---

## Demo Credentials

```text
Email: qa@example.com
Password: Password123!
```

---

## Run Tests

Run all tests:

```bash
npm test
```

Run tests with Playwright UI mode:

```bash
npm run test:ui
```

Run tests in Chromium:

```bash
npm run test:chromium
```

Show HTML report:

```bash
npx playwright show-report
```

---

## Reports and Artifacts

The project is configured to generate useful test artifacts:

* HTML reports;
* screenshots on failure;
* video recordings on failure;
* Playwright traces for debugging.

These artifacts help analyze failed tests and understand what happened during execution.

---

## QA Documentation

The `docs/` folder contains supporting QA documentation, such as:

* test plan;
* test cases;
* checklists;
* bug report examples.

The goal is to show not only automation code, but also basic QA thinking and documentation skills.

---

## Automation Approach

The project follows simple automation principles:

* tests should be readable;
* selectors should be stable;
* test data should be clear;
* each test should be independent;
* Page Object Model should reduce duplication;
* reports and artifacts should help with debugging.

### Task title security regression

The local demo previously inserted task titles with `innerHTML`, allowing an
image event handler in a title to execute in the browser. Titles now use
`textContent`; the Delete button is created separately with `addEventListener`.

`tests/task-security.spec.js` checks that HTML markup and an image with an
`onerror` handler remain literal text, create no injected elements, and can
still be deleted without removing other tasks. Both cases failed against the
original renderer before the fix.

```bash
npx playwright test tests/task-security.spec.js --project=chromium
```

This is a regression check for a local, in-memory training app. It does not
demonstrate a production vulnerability or a complete security audit.

---

## Current Status

Active portfolio project.

Main focus:

* improving test coverage;
* adding more negative scenarios;
* improving Page Object structure;
* expanding QA documentation;
* keeping tests readable and maintainable.

---

## Contact

**Meirzhan Tleubaev**
[LinkedIn](https://www.linkedin.com/in/meirzhantleubaev/)
[tleubaevmeirzhan@gmail.com](mailto:tleubaevmeirzhan@gmail.com)

