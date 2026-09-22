web-smoke:
	cd web && npm run test:smoke
web-regression:
	cd web && npm run test:regression
api:
	cd api && mvn clean test
mobile-smoke:
	cd mobile && npm run test:smoke
