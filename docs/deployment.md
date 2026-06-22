# Deployment Guide

## GitHub

Create a new GitHub repository, then push this code:

```bash
git init
git add .
git commit -m "Initial Proudly full-stack starter"
git branch -M main
git remote add origin git@github.com:YOUR-ORG/proudly.git
git push -u origin main
```

## Vercel

1. In Vercel, choose **Add New Project**.
2. Import the GitHub repository.
3. Set the framework to **Next.js**.
4. Use this build command:

```bash
pnpm --filter @proudly/web build
```

5. Use this install command:

```bash
pnpm install --frozen-lockfile=false
```

6. Add production environment variables from `.env.example`.

## Mobile

Run locally:

```bash
pnpm --filter @proudly/mobile start
```

For App Store / Google Play builds, connect Expo EAS:

```bash
npx eas login
npx eas build:configure
npx eas build --platform ios
npx eas build --platform android
```
