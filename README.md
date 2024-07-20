## Frontend

Untuk frontend menggunakan [Next.js](https://nextjs.org/) project di bootstrapped dengan [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description
run  development server dengan command:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

## Panduan
Buka [http://localhost:3000](http://localhost:3000) menggunakan browser untuk melihat.

anda dapat memulai dengan membuat file di folder `app` secara routing menggunakan system foldering.

folder `action` digunakan sebagai logic untuk action di dalam page
folder 

project ini menggunakan [shadcn-ui](https://ui.shadcn.com/docs/components/accordion) untuk componentsnya, setiap components disimpan di folder `components`.
untuk menambah component gunakan command:

```bash
npx shadcn-ui@latest add <namacomponent>
#component yang di add akan otomatis berada di folder components dan siap digunakan
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Lebih lanjut tentang Next.js dan shadcn-ui

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn shadcn-ui](https://ui.shadcn.com/docs/installation/next).

## Backend
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Untuk backend menggunakan [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
Untuk ORM menggunakan [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb-typescript-mongodb)

## Installation

```bash
$ yarn install
#prisma
$ npm install prisma --save-dev
$ npx prisma
$ npx prisma init

```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod


```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Prisma

```bash
#prisma push ke DB jika selesai membuat schema
$ npx prisma db push

#prisma generate client
$ npx prisma generate
```

## Panduan

1. Ubah file `prisma/schema.prisma` untuk memodifikasi database 
2. Tambah file dto folder `models`
3. Tambah file service di folder `services`
4. Tambah file controller di folder `controllers`
5. Tambah file module di folder `modules`
6. Ubah file `module/app.module.ts` tambahkan import sesuai modul yang dibuat di langkah 4

selamat mencoba