# Use official Node image
FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Expose port (change if needed)
EXPOSE 3000

# Run your app
CMD ["npm", "start"]