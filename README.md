# gdgbordeaux.fr website

## About

This projet is the offical website for gdgbordeaux.fr

## Pre-requisites

- node@8.11.3+
- npm@5.6.0+

## Configure Firebase

1. Create a firebase project with the firebase console.
- activate "Realtime Database" for Database
1. Copy `.env` to `.env.local` file at root folder and set firebase environment variables.

## Install

```bash
npm i
```

## Usage

### Develop

Launch development server on http://localhost:3000
```bash
npm start
```

### Commit

(Mac only)
To make commit look more fancy use `npm i -g gitmoji-cli`
And use `npx gitmoji -i` to install the hook

### Deploy

#### Pre-requisites

You must be logged with firebase and select project :

```bash
npx firebase login
```

> [Firebase documentation](https://firebase.google.com/docs/web)

### Build and deploy the app

```bash
npm run build
npx firebase deploy
```