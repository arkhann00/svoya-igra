# Svoya Igra

Локальная игра на React + Vite.

## Docker (production)

Запускать из корня проекта:

```bash
docker compose up -d --build
```

Сайт будет доступен на [http://localhost:8080](http://localhost:8080).

Остановить:

```bash
docker compose down
```

## Docker (development)

```bash
docker compose -f docker-compose.dev.yml up -d --build
```

Dev-сервер будет доступен на [http://localhost:5173](http://localhost:5173).

Остановить:

```bash
docker compose -f docker-compose.dev.yml down
```

## Если ошибка: no configuration file provided

Эта ошибка появляется, если команда запускается не из корня проекта.

Используйте один из вариантов:

```bash
cd /Users/arsenhacatran/Documents/Projects/svoya-igra
docker compose up -d --build
```

или явно укажите файл:

```bash
docker compose -f /Users/arsenhacatran/Documents/Projects/svoya-igra/docker-compose.yml up -d --build
```
