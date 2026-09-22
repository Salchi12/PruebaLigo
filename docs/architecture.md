# Architecture

```text
QA Automation
├── Web    -> Playwright + TypeScript -> POM + fixtures + data
├── API    -> Karate + Java/Maven      -> Feature + data + assertions
└── Mobile -> Appium + WebdriverIO TS -> POM + selectors + hooks
                         |
                    GitHub Actions
                  PR / Merge / Nightly
```

### Locator strategy
Prefer accessibility identifiers/resource IDs, then stable semantic selectors, then platform UI selectors. XPath is a last resort.

### Maintainability
Tests express business intent. Page objects own selectors/actions. Test data is externalized. No giant BasePage and no `sleep` calls.
