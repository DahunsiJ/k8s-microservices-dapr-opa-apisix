# ---- Build Stage ----
    FROM node:18-alpine AS builder

    WORKDIR /app
    
    # Copy package files and ensure lockfile is used
    COPY package.json package-lock.json ./
    
    # Install only production dependencies
    RUN npm ci --only=production
    
    # Copy the rest of the application source code
    COPY . .
    
    # ---- Runtime Stage ----
    FROM gcr.io/distroless/nodejs:18
    
    WORKDIR /app
    
    # Copy only required files from builder
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/src ./src
    COPY --from=builder /app/package.json package-lock.json ./
    
    # Expose port
    EXPOSE 4400
    
    # Set correct environment variable
    ENV NODE_ENV=production
    
    # Start the application
    CMD ["node", "src/index.js"]
    