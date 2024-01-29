# I have to do this because digitalocean won't update my .js files for some reason...
# So I'll just embed the JS and CSS into index.html at compile time

cp src/index.html .
cp src/main.js .

# Copy in JS
# sed -i 's/<script src="main.js" async defer><\/script>/<script>\nJS_GOES_HERE\n<\/script>/g' index.html
# sed -i -e '/JS_GOES_HERE/{r src/main.js' -e 'd}' index.html
sed -i 's/main.js/\/travel\/crutch\/main.js/g' index.html

# Copy in CSS
# sed -i 's/<link rel="stylesheet" href="style.css">/<style>\nCSS_GOES_HERE\n<\/style>/g' index.html
# sed -i -e '/CSS_GOES_HERE/{r src/style.css' -e 'd}' index.html
sed -i 's/style.css/\/travel\/crutch\/src\/style.css/g' index.html

# Change tree.json path
sed -i 's/tree.json/\/travel\/crutch\/src\/tree.json/g' main.js
