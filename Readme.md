#### Стек технологий:

1. NodeJS
2. Yarn
3. MongoDB

#### Также в проекте используются (Данные зависимости подтянутся автоматически после распаковки):
1. Webpack
2. React
3. React-router
4. React-redux
5. Redux-thunk
6. Stylus
7. Express

#### Порядок распаковки:

1. Устанавливаем необходимые пакеты npm командой "yarn install"
2. Добавьте MongoDB в переменные среды (неуобходимые команды указаны с учётом этого).
3. Выполните в консоли "md \data\db"
3. Выполните в консоли "mongod --dbpath D:\Projects\WebStarterKit-Webpack\mongodb\data" (D:\Projects\WebStarterKit-Webpack\ - Здесь необходимо указать путь к Вашему проекту)
4. Запуск MongoDB

#### Основные команды

1. npm start - Запуск dev server. Работает на localhost:9000
2. npm run serve - Запуск сервера Express
3. npm run db - Запуск базы банных MongoDB
4. npm run build - Сборка проекта под продакшн