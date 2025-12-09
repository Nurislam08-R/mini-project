import React from 'react'

function Logo() {
  return (
    <div className="logo" aria-hidden>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#6366f1" />
        <path d="M7 15V9h2l3 4 3-4h2v6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function Feature({title, children}){
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-left">
          <Logo />
          <span className="brand">React Vercel Site</span>
        </div>
        <div className="nav-right">
          <a className="link" href="#">Home</a>
          <a className="link" href="#features">Features</a>
          <a className="link" href="#">Docs</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <h1>Красочный минималистичный сайт на React</h1>
          <p className="subtitle">Готов к деплою на Vercel — быстрый шаблон с приятным дизайном.</p>
          <div className="buttons">
            <a className="btn primary" href="https://vercel.com/docs" target="_blank" rel="noreferrer">Deploy to Vercel</a>
            <a className="btn outline" href="#features">Посмотреть фичи</a>
          </div>
        </div>
        <div className="hero-decor" aria-hidden>
          <svg viewBox="0 0 600 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <path d="M0,100 C150,200 450,0 600,100 L600 00 L0 0 Z" fill="url(#g1)" />
          </svg>
        </div>
      </header>

      <main className="content">
        <section id="features" className="features">
          <Feature title="Быстрый старт">Vite + React — супербыстрая сборка и HMR.</Feature>
          <Feature title="Деплой">Одно нажатие — и ваш сайт в продакшене на Vercel.</Feature>
          <Feature title="Адаптивный">Работает на мобильных устройствах и на больших экранах.</Feature>
        </section>

        <section className="about">
          <h2>Почему этот шаблон?</h2>
          <p>Небольшой, аккуратный шаблон для демонстрации, портфолио или лендинга. Легко кастомизировать цвета, шрифты и компоненты.</p>
          <div className="panel">
            <ul>
              <li>Vite dev server</li>
              <li>React 18</li>
              <li>Готов к деплою на Vercel</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} — Ваш проект • <a href="https://github.com/Nurislam08-R/mini-project" target="_blank" rel="noreferrer">Исходники</a></footer>
    </div>
  )
}
