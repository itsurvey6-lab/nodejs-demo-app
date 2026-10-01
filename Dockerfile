FROM node:22-alpine

# Set Working Directory in Docker Container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY src ./src

# Application port
EXPOSE 3000

# Start application
CMD ["npm", "start"]