FROM node:alpine3.20

ENV BACKEND_URL=http://0.0.0.0:4000/api
ADD . /app

WORKDIR /app

RUN npm i

ENTRYPOINT [ "node" ]

CMD [ "app.js" ]