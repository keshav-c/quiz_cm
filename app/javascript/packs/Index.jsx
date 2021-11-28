import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="Quiz_Codemancers" />,
    document.body.appendChild(document.createElement('div')),
  )
})
