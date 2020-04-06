install: 
	npm install

start:
	node bin/brain-games.js

publish:
	npm publish --dry-run

make:
	make lint npx eslint .