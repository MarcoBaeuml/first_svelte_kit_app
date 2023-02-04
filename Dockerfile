FROM node:19

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build
RUN npx prisma generate

CMD node build