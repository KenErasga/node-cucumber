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

RUN curl -fsSL https://get.docker.com -o get-docker.sh

RUN sh get-docker.sh

RUN npm install

RUN npm run build

FROM library/node:10.16-alpine

USER node

WORKDIR /app

COPY --chown=node:node --from=0 /install/ .

CMD npm run test-report-docker; ret=$? ; npm run report-docker ; exit $ret


# from jenkins/jenkins:lts

# USER root
# RUN apt-get update -qq && \
#    apt-get -y install apt-transport-https \
#    ca-certificates \
#    curl \
#    gnupg2 \
#    software-properties-common && \
#    curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
#    add-apt-repository \
#    "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
#    $(lsb_release -cs) \
#    stable" && \
#    apt-get update && \
#    apt-get -y install docker-ce
# RUN usermod -aG docker jenkins