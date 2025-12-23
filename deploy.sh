rm -rf build
pnpm build
echo "coldseason.space" > build/CNAME
pnpx gh-pages -d build --nojekyll