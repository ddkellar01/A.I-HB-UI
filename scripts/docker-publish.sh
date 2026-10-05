#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

IMAGE_NAME="ai-ui-repo"
DOCKER_HUB_USERNAME="your-dockerhub-username" # Replace with your actual Docker Hub username
VERSION="latest"

echo "[*] Logging into Docker Hub..."
docker login

echo "[*] Building Docker image for production..."
docker build -t ${IMAGE_NAME}:${VERSION} .

echo "[*] Tagging image for Docker Hub..."
docker tag ${IMAGE_NAME}:${VERSION} ${DOCKER_HUB_USERNAME}/${IMAGE_NAME}:${VERSION}

echo "[*] Pushing image to Docker Hub..."
docker push ${DOCKER_HUB_USERNAME}/${IMAGE_NAME}:${VERSION}

echo "[+] Successfully published ${DOCKER_HUB_USERNAME}/${IMAGE_NAME}:${VERSION}!"
