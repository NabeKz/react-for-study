distdir=dist
yamlname=${distdir}/index.yaml
htmlname=${distdir}/index.yaml

yarn merge -t yaml -o $yamlname
yarn redoc $yamlname -o $htmlname