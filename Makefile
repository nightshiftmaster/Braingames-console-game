install: 
	npm install

start:
	node dist/bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

build:
	rm -rf dist
	npm run build