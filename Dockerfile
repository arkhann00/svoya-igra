FROM node:20-alpine

WORKDIR /app

# Сначала только зависимости
COPY package*.json ./
RUN npm install

# Затем копируем весь проект
COPY . .

# Vite по умолчанию слушает 5173 порт
EXPOSE 5173

# Запускаем dev-сервер, доступный снаружи
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
