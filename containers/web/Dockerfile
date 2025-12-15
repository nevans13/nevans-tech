FROM debian:latest
RUN apt update
RUN apt install -y nodejs npm
RUN mkdir /root/nevans-tech-web
WORKDIR /root/nevans-tech-web
COPY package.json server.js .env ./
COPY public/ ./public/
RUN npm install
EXPOSE 80/tcp
CMD ["npm", "start"]