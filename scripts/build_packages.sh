#!/bin/bash
set -e

# Prepare
npx lerna exec --parallel -- rm -rf dist

# Build
yarn build:flags

#CJS
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' src/* dist
npx lerna exec --parallel -- npx babel dist -d dist --config-file $(pwd)/babel.config.cjs.js

#ESM
npx lerna exec --parallel -- rsync -a --prune-empty-dirs --exclude '__snapshots__/*' --exclude '*.test.js' src/* dist/esm
npx lerna exec --parallel -- npx babel dist/esm -d dist/esm --config-file $(pwd)/babel.config.esm.js

#CSS
npx postcss packages/**/dist/**/*.css --config ./postcss.prod.config.js --replace --verbose
