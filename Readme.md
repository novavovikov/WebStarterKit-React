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
3. Выполните в консоли "mongod --dbpath D:\Projects\Webpack\back\db\mongodb\data" (D:\Projects\WebStarterKit-Webpack\ - Здесь необходимо указать путь к Вашему проекту)
4. Запуск MongoDB

#### Основные команды
1. npm start - Запуск dev server. Работает на localhost:9000
2. npm run serve - Запуск сервера Express. Работает на localhost:3012
3. npm run db - Запуск базы банных MongoDB
4. npm run build - Сборка проекта под продакшн