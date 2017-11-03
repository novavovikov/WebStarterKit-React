#### Стек технологий:
1. NodeJS
2. MongoDB

#### Также в проекте используются следующие пакеты (Данные зависимости подтянутся автоматически после распаковки):
1. Webpack
2. React-router
3. React-redux
4. Redux-thunk
5. Stylus
6. Express

#### Порядок распаковки:
1. Устанавливаем необходимые пакеты npm командой "npm i"
2. Добавьте MongoDB в переменные среды (необходимые команды указаны с учётом этого).
3. Выполните в консоли "md \data\db"
3. Выполните в консоли "mongod --dbpath D:\Projects\Webpack\server\db\mongodb\data" (D:\Projects\WebStarterKit-Webpack\ - Здесь необходимо указать путь к Вашему проекту)
4. Запуск MongoDB

#### Основные команды
1. npm start - Запуск dev-server. (http://localhost:9000)
2. npm run build - Сборка проекта под продакшн (необходимо для боевого сервера)
3. npm run db - Запуск базы банных MongoDB. Без запуска базы данных боевой сервер выдаст ошибку.
4. npm run server - Запуск сервера Express. (http://localhost:3012)