#!/bin/bash

set -e  # Stop script if any command fails

IMAGE_NAME="clawbit_portal"
TAG="latest"

echo "-------------------------------------"
echo "[INFO] Starting deployment..."
echo "[INFO] Image: ${IMAGE_NAME}:${TAG}"
echo "-------------------------------------"

# Step 1: Stop and remove existing containers
echo "[STEP 1] Stopping existing containers..."
docker compose down || echo "[WARN] No running containers."

# Step 2: Remove old Docker image (if exists)
echo "[STEP 2] Removing old Docker image..."
docker rmi -f "${IMAGE_NAME}:${TAG}" || echo "[WARN] Old image not found."

# Step 3: Build new Docker image
echo "[STEP 3] Building new Docker image..."
docker build -t "${IMAGE_NAME}:${TAG}" .

# Step 4: Start containers
echo "[STEP 4] Starting containers..."
docker compose up -d

# Step 5: Verify container is running
echo "[STEP 5] Checking container status..."
if ! docker ps --format "{{.Image}}" | grep -q "${IMAGE_NAME}:${TAG}"; then
  echo "[ERROR] Deployment failed. Container is not running."
  exit 1
fi

echo "-------------------------------------"
echo "[SUCCESS] Deployment completed successfully!"
echo "-------------------------------------"
