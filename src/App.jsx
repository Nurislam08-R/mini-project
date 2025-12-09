import React from 'react'

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Простой сайт на React</h1>
        <p>Готово к деплою на Vercel — нажмите кнопку ниже, чтобы начать.</p>
        <div className="buttons">
          <a className="btn" href="https://vercel.com/docs" target="_blank" rel="noreferrer">Vercel Docs</a>
        </div>
      </header>

      <main className="content">
        <section>
          <h2>Добро пожаловать!</h2>
          <p>Это минимальный шаблон приложения на React с Vite, который легко разворачивать на Vercel.</p>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} — Ваш проект</footer>
    </div>
  )
}
