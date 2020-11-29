# Кварк
Модульная интеллектуальная система для управления технологическими процессами, с пользовательскими расширениями и шаблонами для решения самых актуальных задач предприятия.

Приложение написано с использованием веб-технологий что делает его достаточно гибким к платформе использования.

> Демо веб-версия приложения: [приложение в виде HTML ](http://voiceapiserver.na4u.ru/static/demoApp/index.html)

> Собранная версия для Windows: [ссылка на скачивание](https://dropmefiles.com/dS7tS)

## Frontend часть приложения Кварк

Локальный запуск **Frontend** части приложения доступен через файл  index.html  в корне приложения.

Используемые технологии разработки:
> JavaScript
> HTML
> CSS

**Основные возможности :**

* Взаимодействие с серверной частью приложения.
* Предоставление интерфейса для интернет телефонии и чата.
* Интерактивные инструменты для работы с нотацией BPMN 2.0
* Реализация методов записи воспроизведения и отправки аудио данных
* Предоставление удобного взаимодействия с приложением

##Backend Приложения КВАРК** Серверная часть приложения.
> Демо [доступно по ссылке ](https://voiceapiserver.na4u.ru/) REST API

> Демо [приложения в виде HTML ](http://voiceapiserver.na4u.ru/static/demoApp/index.html) **Авторизация отключена намеренно!**

Приложение написано на node.js с использованием:

> express
> joi
> peer
> pg
> Переменные окружения (основные настройки в **.env** файле)

**Основные возможности:**

1. реализует взаимодействие с БД (**Postgres**).
2. **P2P** сервер голосового и видео общения.
3. нейронная сеть распознавания речи. [Проект размещен отдельно](https://github.com/sovaai/sova-asr) использует ся как модуль.

**Запуск приложения**

> В дерриктории проекта

1. Запуск **Docker** контейнера с Базой данных (**Postgres**). или локальный запуск Базы данных.

$ docker-compose up

2. Залить дамп таблиц и тестовые данные в Базу данных (**SQLdump.txt**)

3. Проверить корректность настроек переменного окружения - при необходимости отредактировать (**.env**) файл

4. При помощи [npm](https://npmjs.org/) устанавливаем зависимости.

$ npm i

5. После успешной установки зависимостей, запуск приложения:

$ npm run start:dev

---

**Набор Эндпоинтов**

Представлен в виде коллекции для [Postman](https://www.postman.com/downloads/)

Импортировать (**Rosatom Server.postman_collection.json**) в Postman (коллекция настроена на localhost ). [продакшен сервер](https://voiceapiserver.na4u.ru/) **https://voiceapiserver.na4u.ru/**