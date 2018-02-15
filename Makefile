DATE=$(shell date +%Y%m%d@%H.%M%Z)
PROJECT_DIR=$(shell pwd)

commit:
	git add .
	git commit -m "${DATE}"

push:
	git push -u origin master

patch-versions: commit push
	(cd ${PROJECT_DIR}/src && npm version patch)
	cd ${PROJECT_DIR}
	git add .
	git commit -m "${DATE}"
	npm version patch

update-deps:
	npm run build

build: update-deps
	npm run build

publish:
	echo ${PROJECT_DIR}
	echo ""${PROJECT_DIR}/dist"
	(cd ${PROJECT_DIR}/dist && npm publish)


