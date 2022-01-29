#!/bin/bash
bash -v build.sh
browserify build/index.js --debug -o public/index.js
rm -rf ~/Devs/run/app/adsales
mkdir ~/Devs/run/app/adsales
cd public
cp -r * ~/Devs/run/app/adsales
cd ..
