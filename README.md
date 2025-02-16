# Kubernetes Microservices with Dapr, OPA, and APISIX

This project sets up a microservices architecture using Kubernetes, Dapr, Open Policy Agent (OPA), and Apache APISIX.

## Features
- **Dapr** for service-to-service communication
- **OPA** for access control
- **Kafka** for event-driven architecture
- **YugabyteDB** for scalable storage

## Setup
1. Start Minikube: `minikube start`
2. Deploy services: `kubectl apply -f kubernetes/`
3. Test using APISIX: `curl http://<minikube-ip>/service-1/`
