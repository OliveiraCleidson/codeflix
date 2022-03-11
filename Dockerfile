FROM node:14.15.4-slim as Developer

RUN apt update && apt install -y --no-install-recommends \
    git \
    ca-certificates \
    gnupg2

USER node
WORKDIR /home/node/app


CMD ["sh", "-c", "npm i && tail -f /dev/null"]