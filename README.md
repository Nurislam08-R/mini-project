# React Vercel Site

Простой шаблон React (Vite) для быстрого деплоя на Vercel.

## Локальная разработка

Откройте терминал в папке проекта и выполните:

```powershell
npm install
npm run dev
```

Откройте `http://localhost:5173` в браузере.

## Сборка для продакшна

```powershell
npm run build
npm run preview
```

После `npm run build` папка `dist` будет готова для деплоя.

## Деплой на Vercel

1) Самый простой вариант — через GitHub/GitLab/Bitbucket:
   - Инициализируйте репозиторий, запушьте код в удалённый репозиторий.
   - Импортируйте проект в Vercel (https://vercel.com/new) и выберите репозиторий.
   - Vercel автоматически запустит `npm run build` и задеплоит сайт.

2) Или используйте Vercel CLI:

```powershell
npm i -g vercel
vercel login
vercel
```

При первом запуске `vercel` следуйте подсказкам для настройки и деплоя.

---

Если хотите, могу инициализировать git в проекте и подготовить первый коммит, а затем подсказать команду для деплоя на Vercel автоматически.