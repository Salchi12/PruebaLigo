# CI/CD Strategy

- **PR:** P0 smoke only, optimized for fast feedback.
- **Merge:** P0 + P1 on the main branch.
- **Nightly:** broader regression, including P2 where infrastructure allows.

All jobs upload reports/evidence with `if: always()`.
