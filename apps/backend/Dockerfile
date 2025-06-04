# Use Node.js base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Build Payload (only needed if you're using TypeScript or building admin panel)
RUN npm run build

# Expose port (Payload usually runs on 3000)
EXPOSE 3000

# Start Payload
CMD ["npm", "run", "start"]
