# -------- Build Stage --------
FROM node:22-alpine AS build

WORKDIR /app

# Copy only package files first (better caching)
COPY package.json package-lock.json* ./

RUN npm install

# Copy rest of the project
COPY . .

RUN npm run build


# -------- Production Stage --------
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only necessary files from build stage
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000

CMD ["npx", "next", "start"]
