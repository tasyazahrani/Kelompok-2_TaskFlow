# Gunakan Node.js untuk development
FROM node:18-alpine

# Atur working directory
WORKDIR /app

# Salin file package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file project
COPY . .

# Expose port 3000 untuk React dev server
EXPOSE 3000

# Jalankan React di mode development
CMD ["npm", "start"]