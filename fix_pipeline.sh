#!/usr/bin/env bash
set -e

echo "==> Cleaning old lockfiles and node_modules..."
rm -rf node_modules package-lock.json .next

echo "==> Installing dependencies and regenerating package-lock.json..."
npm install

echo "==> Testing ESLint locally..."
npm run lint

echo "==> Testing Next.js build locally..."
npm run build

echo "==> Committing and pushing updates..."
git add package.json package-lock.json Dockerfile
git commit -m "fix(ci): resolve package-lock mismatch, eslint plugin, and docker build"
git push origin main

echo "==> Pipeline update completed successfully!"
