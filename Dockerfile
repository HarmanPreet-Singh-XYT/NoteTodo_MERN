# ===============================
# Build stage
# ===============================
FROM node:22 AS builder

# Set working directory
WORKDIR /app

# Copy package manifests
COPY package.json package-lock.json ./

# Install dependencies (includes dev if needed for build)
RUN npm ci

# Copy the rest of the app source
COPY . .

# ===============================
# Production runtime stage
# ===============================
FROM node:22-alpine AS production

# Set working directory
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy only node_modules from builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy built app files (all source since no build step for plain node server)
COPY --from=builder /app .

# Environment variables
ENV ENCRYPT_BACKEND=""
ENV FRONTEND_SERVER_ORIGIN="https://note-todo-app.vercel.app/"
ENV MONGOOSE_URL=""
ENV NEXT_PUBLIC_ENCRYPT_API=""
ENV PORT=4000
ENV SMTP_EMAIL=""
ENV SMTP_PASSWORD=""
ENV SMTP_PORT=""
ENV SMTP_SERVER=""
ENV SMTP_USERNAME=""
ENV SUPPORT_OWNER_EMAIL=""
ENV DOMAIN=""

# Expose the application port
EXPOSE ${PORT}

# Start the server
CMD ["node", "server.js"]
