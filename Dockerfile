# Этап сборки фронтенда
FROM node:20-alpine AS build

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json, если он есть
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код проекта
COPY . .

# Сборка Vite-приложения в прод-режиме
RUN npm run build

# Этап запуска (Nginx отдаёт статику)
FROM nginx:1.27-alpine

# Удаляем дефолтную конфигурацию и добавляем свою
RUN rm /etc/nginx/conf.d/default.conf

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранный фронт в папку, откуда Nginx отдаёт файлы
COPY --from=build /app/dist /usr/share/nginx/html

# Порт внутри контейнера
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
