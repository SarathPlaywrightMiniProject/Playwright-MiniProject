# Playwright tests for (https://www.polestar.com/se) website

# Quick Start

### Install Dependencies

`npm i`

### Install browsers

`npx playwright install`

# Run Tests

All the UI tests for demoqa.com are present in file : demoqa-web-ui.spec.ts
All the API tests for Book store application are present in file : store-book-api.spec.ts

`npx playwright test`

---


## About

## List all test titles

`npx playwright test --list`

---

## File Structure

    .
    ├── bin                     # Example CLI commands
    ├── node_modules            # Dependencies
    ├── src                     # Project
    │   ├── data                # Test data
    │   ├── models              # Classes representing functionality
    │   └── pages               # Page object classes of polestar website
    │   ├── requests            # request json files for api tests
    │   └── test                # Contains api and ui tests
    ├── package.json            # Project metadata
    ├── package-lock.json       # Describes dependency tree
    ├── playwright.config.ts    # Playwright test configuration
    └── README.md               # This file
## CI/CD - Azure Pipeline
azure-pipeline.yml
## Test report 
Ui and APi
![image](https://github.com/SarathPlaywrightMiniProject/Playwright-MiniProject/assets/174230026/975edeb5-2a4d-462f-bcd2-d63225a072f8)
![UI_Polatsar_report](https://github.com/SarathPlaywrightMiniProject/Playwright-MiniProject/assets/174230026/8b273948-0844-4cf0-a97a-1a0e2ac89511)

