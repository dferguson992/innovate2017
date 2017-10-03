FROM node:6.11.3
EXPOSE 80
RUN npm install -g symphony-app
ENV node_env prod
ENV node_config /app/config/
RUN mkdir /app
WORKDIR /app
COPY . /app

ENTRYPOINT ["node", "server"]