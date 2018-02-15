DATE=`date +%Y%m%d@%H.%M%Z`
PROJECT_DIR=`pwd`

commit:
	git add . ; git commit -m "${DATE}"
	
patch-versions: commit
	cd ${PROJECT_DIR}/src 
	npm version patch 
	cd ${PROJECT_DIR} 
	npm version patch

update-deps:
	npm run build

build: update-deps
	npm run build

publish:
	cd ${PROJECT_DIR}/dist 
	npm publish


