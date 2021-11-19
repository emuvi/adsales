bash -v build.sh
browserify build/index.js --debug -o public/index.js
rm -rf ../qinpel-dsk/run/app/adsales
mkdir ../qinpel-dsk/run/app/adsales
cd public
cp -r * ../../qinpel-dsk/run/app/adsales/
cd ..