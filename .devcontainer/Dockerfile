FROM node:20.12

RUN apt-get update \
    && apt-get install -y \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace