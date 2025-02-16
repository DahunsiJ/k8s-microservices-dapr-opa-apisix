# Use an official Node.js LTS image
FROM node:18-alpine AS builder

# Set a secure working directory
WORKDIR /app

# Copy only package files to leverage Docker cache
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the remaining application files
COPY . .

# Create a non-root user for running the app securely
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the application port
EXPOSE 4400

# Run the application with least privileges
CMD ["node", "src/index.js"]
