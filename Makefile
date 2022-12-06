install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8
