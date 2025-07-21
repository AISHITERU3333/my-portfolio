# Указываем базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем зависимости
COPY package.json package-lock.json* ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Собираем проект
RUN npm run build

# Указываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
