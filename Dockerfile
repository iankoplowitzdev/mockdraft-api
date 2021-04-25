FROM node:12.13.1-alpine
WORKDIR /opt/mockDraft/api
COPY . .
RUN yarn install
CMD ["./node_modules/nodemon/bin/nodemon.js", "index.js"]