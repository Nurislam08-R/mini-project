import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props){
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error){
    return { hasError: true, error }
  }

  componentDidCatch(error, info){
    // You could log to an error reporting service here
    console.error('ErrorBoundary caught:', error, info)
  }

  reset = () => this.setState({ hasError: false, error: null })

  render(){
    if (this.state.hasError){
      return (
        <div style={{padding:24,fontFamily:'Inter,Arial,Helvetica,sans-serif'}}>
          <h2 style={{color:'#991b1b'}}>Произошла ошибка приложения</h2>
          <p style={{color:'#111'}}>Мы зафиксировали проблему. Попробуйте перезагрузить страницу или обновить приложение.</p>
          <pre style={{whiteSpace:'pre-wrap',background:'#f8fafc',padding:12,borderRadius:8}}>{String(this.state.error && this.state.error.message)}</pre>
          <div style={{marginTop:12}}>
            <button onClick={() => window.location.reload()} style={{marginRight:8,padding:'8px 12px'}}>Перезагрузить</button>
            <button onClick={this.reset} style={{padding:'8px 12px'}}>Очистить</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
