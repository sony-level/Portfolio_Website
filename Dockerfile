FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app 

COPY package-lock.json package.json ./

# Install the dependencies

RUN npm install 

COPY . .

RUN npm run build

# Stage 2

# getting the node image

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]
