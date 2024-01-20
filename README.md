# SkyPro Avito

Финальный проект — реализация сайта онлайн объявлений, аналогичного "Авито".

## Описание проекта

Реализован функционал для незарегистрированного и зарегистрированного пользователя.\
Реализован функционал регистрации и аутентификации пользователя.

### логика поведения незарегистрированного пользователя:

-   Возможность поиска товаров по ключевым словам на главной странице.
-   Просмотр объявления.
-   Просмотр профиля продавца.
-   Возможность просматривать комментарии(отзывы) о товаре.
-   Возможность получать номер телефона продавца.

### логика поведения зарегистрированного пользователя:

-   Смена имени, фамилии, города, телефона, аватарки, пароля через личный кабинет.
-   Добавление объявления.
-   Возможность снять объявление с публикации.
-   Редактирование объявления.
-   Добавление отзывов о товаре.

### Стек технологий:

-   React
-   CSS Modules
-   Redux Toolkit
-   RTK Query
-   HTML
-   CSS

### Используемые библиотеки:

-   [date-fns](https://date-fns.org/)
-   [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)
-   [react-toastify](https://www.npmjs.com/package/react-toastify)

## Установка и запуск

1. Клонируйте репозиторий на свой компьютер:
   git clone <URL репозитория>
2. Перейдите в корневую папку проекта:
   cd <название папки>
3. Установите зависимости: `npm install`

4. Запустите приложение: `npm start`

5. Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть ваше приложение.

## Запуск базы данных

1. Установите Docker, если еще не установлен [Docker](https://www.docker.com/).
2. Запустите Docker
3. Бекэнд часть можно взять [здесь](https://drive.google.com/file/d/1pFE-NRANTsWmQwTyURjHXuECMmoKCFjO/view).
4. Скачайте архив и разархивируйте его.
5. Через терминал перейдите в разархивированную папку.
6. Запустите контейнер с базой данных в терминале:

```
docker-compose -f docker-compose-backend.yaml up -d
```

7. После первого выполнения команды все образы подтянуться, но могут не запуститься, в этом случае повторно выполните команду:

```
docker-compose -f docker-compose-backend.yaml up -d
```

8. После этого бэкенд и Swagger будут доступны по адресу [http://localhost:8090/](http://localhost:8090/)

## Помощь и поддержка

Если у вас возникли вопросы или проблемы, пожалуйста, создайте `issue` в этом репозитории.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
