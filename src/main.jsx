import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ErrorBoundary from './ErrorBoundary'
import './styles.css'

function escapeHtml(str){
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}

const rootEl = document.getElementById('root')
if (!rootEl) {
  // If root missing, write a visible error so page doesn't stay white
  document.body.innerHTML = '<div style="padding:20px;font-family:Arial,Helvetica,sans-serif;color:#b91c1c">Ошибка: root element не найден</div>'
} else {
  try {
    const root = createRoot(rootEl)
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    )
  } catch (err) {
    // Show a readable error in the page (production builds hide errors)
    console.error('Render error:', err)
    rootEl.innerHTML = `\n      <div style="padding:20px;font-family:Arial,Helvetica,sans-serif;color:#b91c1c">\n        <h2>Произошла ошибка приложения</h2>\n        <pre style="white-space:pre-wrap;color:#111">${escapeHtml(err && err.message ? err.message : String(err))}</pre>\n      </div>`
  }

  // Global handlers to surface runtime errors instead of leaving a white screen
  window.addEventListener('error', (e) => {
    console.error('Window error:', e.error || e.message)
    const overlay = document.createElement('div')
    overlay.style = 'position:fixed;left:0;top:0;right:0;background:#fee2e2;color:#7f1d1d;padding:12px;z-index:9999;font-family:Arial,Helvetica,sans-serif'
    overlay.textContent = 'Runtime error: ' + (e.error && e.error.message ? e.error.message : e.message || 'Unknown')
    document.body.prepend(overlay)
  })

  window.addEventListener('unhandledrejection', (ev) => {
    console.error('Unhandled rejection:', ev.reason)
    const overlay = document.createElement('div')
    overlay.style = 'position:fixed;left:0;top:0;right:0;background:#fff7ed;color:#92400e;padding:12px;z-index:9999;font-family:Arial,Helvetica,sans-serif'
    overlay.textContent = 'Unhandled promise rejection: ' + (ev.reason && ev.reason.message ? ev.reason.message : String(ev.reason))
    document.body.prepend(overlay)
  })
}
