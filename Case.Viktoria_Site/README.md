Коротко — как работать с проектом локально:

Команды:

- Установить dev-зависимости (рекомендовано):
  npm install --save-dev concurrently live-server sass

- Запустить только SASS watch (обновляет main.css при изменениях):
  npm run watch:sass

- Запустить всё вместе (после установки зависимостей):
  npm run dev

VS Code:

- Запустить задачу "Watch SASS": Terminal → Run Task → Watch SASS (она будет работать в фоне).
- Откройте `index.html` через Live Server (правый клик → Open with Live Server) или запустите `npm run dev`.

Если Live Server не перезагружает страницу автоматически, попробуйте включить Auto Save в VS Code или использовать команду `sass --watch main.scss:main.css --poll`.
