yarn build
touch build/CNAME
echo fondsontran.com > build/CNAME
gh-pages -d build -b master