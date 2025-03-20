# Use the official Node Alpine Version
FROM node:23-alpine3.20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy all project files to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Run Next.js in development mode
CMD ["npm", "run", "dev"]