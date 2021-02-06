VERSION=$1 
yarn build && \
docker build -t chalfel/ts-express-boilerplate:$VERSION . && \
docker push chalfel/ts-express-boilerplate:$VERSION
