# node app

FROM node:14.18.1

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

COPY --chown=node:node . .

RUN npm install --no-optional
RUN npm install -g serve

CMD serve -l 3000

EXPOSE 3000
