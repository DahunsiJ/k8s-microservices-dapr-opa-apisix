# Use an official Node.js LTS image with a smaller attack surface
FROM node:18-alpine AS builder

# Set a secure working directory
WORKDIR /app

# Copy only package files to leverage Docker cache
COPY package*.json ./

# Install dependencies as a non-root user
RUN npm ci --only=production

# Copy the application source code
COPY . .

# Use a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the application port
EXPOSE 4000

# Run the application securely
CMD ["node", "src/server.js"]
