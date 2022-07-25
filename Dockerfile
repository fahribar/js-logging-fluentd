FROM node:16.13-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY app.js ./
CMD [ "node", "app.js" ]

# #COPY app.js /usr/src/app/app.js
# COPY high-volume.js /usr/src/app/app.js

# WORKDIR /usr/src/app

# CMD [ "node", "app.js" ]

#new
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY app.js ./
# CMD [ "node", "app.js" ]

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY app.js ./
COPY logagent.js ./
COPY start.sh ./
# Make the script executable and ensure the log file exists
RUN chmod +x ./start.sh
RUN mkdir /var/log/app/
RUN touch /var/log/app/log-file.log
CMD [ "./start.sh" ]