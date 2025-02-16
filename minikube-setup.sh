#!/bin/bash

echo "Starting Minikube..."
minikube start --driver=docker

echo "Enabling Addons..."
minikube addons enable ingress
minikube addons enable metrics-server

echo "Deploying Kubernetes resources..."
kubectl apply -f kubernetes/

echo "Setup complete!"
