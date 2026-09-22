# Test Scenarios

## Web
| ID | Scenario | Priority | Technique | Automated |
|---|---|---|---|---|
| WEB-01 | Valid login | P0 | POM + fixture | Yes |
| WEB-02 | Locked user | P0 | Data driven | Yes |
| WEB-03 | Add product to cart | P0 | POM | Yes |
| WEB-04 | Complete purchase | P0 | E2E + POM | Yes |
| WEB-05 | Validate cart | P0 | Assertions | Yes |
| WEB-06 | Required checkout fields | P1 | Equivalence partitioning | Yes |
| WEB-07 | Remove product | P1 | POM | Yes |
| WEB-08 | Invalid credentials | P1 | Equivalence partitioning | Yes |
| WEB-09 | Problem user | P1 | Risk based | Yes/optional |
| WEB-10 | Secondary navigation | P2 | Functional | No |

## API
| ID | Scenario | Priority | Technique | Automated |
|---|---|---|---|---|
| API-01 | Generate token | P0 | Positive | Yes |
| API-02 | Create booking | P0 | CRUD + contract | Yes |
| API-03 | Get booking | P0 | Data chaining | Yes |
| API-04 | Update booking | P0 | Persistence | Yes |
| API-05 | Delete booking | P0 | Persistence | Yes |
| API-06 | Non-existent booking | P1 | Negative | Yes |
| API-07 | Invalid booking payload | P1 | Equivalence partitioning | Yes |
| API-08 | Invalid token | P1 | Negative | Yes |
| API-09 | Schema/contract | P1 | Contract testing | Yes |
| API-10 | Headers/boundaries | P2 | Protocol/BVA | Yes |

## Mobile
| ID | Scenario | Priority | Technique | Automated |
|---|---|---|---|---|
| MOB-01 | Valid login | P0 | POM | Yes |
| MOB-02 | Product catalog | P0 | POM | Yes |
| MOB-03 | Product detail | P0 | POM | Yes |
| MOB-04 | Add to cart | P0 | POM | Yes |
| MOB-05 | Checkout | P0 | E2E | Yes |
| MOB-06 | Cart validation | P1 | Assertions | Yes |
| MOB-07 | Invalid login | P1 | Data driven | Yes |
| MOB-08 | QR/camera | P2 | Device capability | No |
