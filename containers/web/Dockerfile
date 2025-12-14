FROM debian:latest
RUN apt update && apt upgrade -y
RUN apt install -y nano man sudo gnupg wget procps nodejs npm
RUN mkdir /root/nevans-tech-web
WORKDIR /root/nevans-tech-web
COPY package.json server.js .env ./
COPY public/ ./public/
RUN npm install
EXPOSE 80/tcp