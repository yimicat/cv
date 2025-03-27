FROM node:23.5.0-alpine3.20 AS builder

WORKDIR /app
COPY package.json ./
COPY .svelte-kit/tsconfig.json ./svlete-kit/
COPY scripts/preinstall.js ./scripts/
RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm
RUN pnpm i

COPY . .
WORKDIR /app
RUN pnpm run build


FROM node:23.5.0-alpine3.20
USER node:node
WORKDIR /app

COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json .
CMD ["node","build"]