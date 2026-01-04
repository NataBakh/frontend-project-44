#Makefile
install:
	npm ci

brain-games:
	node bin/brain-games.js
  
brain-games-even:
	node bin/brain-even.js

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

publish:
	npm publish --dry-run