# QA Automation Challenge — Web / API / Mobile

Monorepo solution for the LIGO QA Automation challenge.

## Stack
- Web: Playwright + TypeScript — SauceDemo
- API: Karate DSL + Java/Maven — Restful Booker
- Mobile: Appium + WebdriverIO + TypeScript — My Demo App Android
- CI/CD: GitHub Actions

## Strategy
Risk-based automation. P0 covers the business-critical path and authentication. P1 covers high-value negative, data and persistence scenarios. P2 contains peripheral or lower-value checks that are documented but not part of the first regression scope.

## Execution
### Web
```bash
cd web && npm ci && npx playwright install --with-deps chromium
npm run test:smoke
npm run test:regression
```
### API
```bash
cd api && mvn clean test
```
### Mobile
Set `APP_PATH` to the selected My Demo App Android APK release, start an Android emulator, then:
```bash
cd mobile && npm ci && npm run test:smoke
```

## CI/CD
| Trigger | Scope |
|---|---|
| Pull Request | P0 smoke |
| Merge to main | P0 + P1 |
| Nightly | broader regression |

Reports and failure evidence are uploaded as CI artifacts.

## Architecture
POM + fixtures + data factories for UI automation. Karate feature files for API. No Cucumber is added to Web/Mobile because it would add an abstraction layer without enough value for this challenge.
