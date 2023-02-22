#Getting started


## Folder `src` structure
```
src
|__ api (contail all API)
|__ app (contain file global App)
|__ components (shared components between features, you can group by folder)
|__ hooks (shared hooks between features)
|__ theme (contain config MUI theme - palete, typo, component)
|__ types (contain all type of project)
|__ ultils (shared helper functions)
|__ main.tsx (Root App)
```

### Folder `features` structure
Contain items only use in a specific feature
```
auth (sub-folder of features)
|__ components (shared components of feature auth)
|__ pages (pages of feature auth)
|__ hooks (shared hooks in feature auth)
|__ context.ts (context of feature auth)
|__ routes.ts (constanst routes of feature auth)
|__ index.tsx (entry point of feature auth)
```
Note:
- You can add more `folder` or `file` to use in specific feature
- Feel free to add more sub-folder in `features`. E.g: `dashboard`, `admin`

## Env variable import:
1. You need to add type in [env.d.ts](./src/env.d.ts) like "readonly VITE_ANYTHING: string"
2. Variables MUST start with `VITE_`
3. Usage of env variable in your app, no need to import, just use it as a global variable: `console.log(import.meta.env.VITE_API_URL)`

Read more: [Vite - Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)

### Env mode
Development: `.env.development`
Staging: `.env.staging`
Production: `.env.production`

### Load other env mode in dev
Default when we use `yarn dev` vite use .env.development
If you want to test another env you can add more flag
Staging: `--mode staging`
Production: `--mode production`

```
yarn dev --mode staging
```

## Mockdata
Setup mockup data when doing UI for project

## Read on:

- [Home](../README.md)
- [Code Style](./CODE_STYLE.md)