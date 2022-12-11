install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test-watch:
	npm test -- --watch
