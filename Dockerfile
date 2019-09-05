FROM library/node:10.16-alpine

WORKDIR /install

WORKDIR /install/build

COPY package.json /install/

COPY package-lock.json /install/

COPY tsconfig.json /install/

COPY cucumber.js /install/

COPY /features/ /install/test/

COPY /steps/ /install/steps/

COPY /support/ /install/support/

RUN npm install

RUN npm run build

FROM library/node:10.16-alpine

USER node

WORKDIR /app

COPY --chown=node:node --from=0 /install/ .

CMD npm run test-report-docker; ret=$? ; npm run report-docker ; exit $ret