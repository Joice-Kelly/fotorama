import { BrowserRouter } from 'react-router-dom'
import {StrictMode} from 'react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'


var ReactDOM = require('react-dom/client')
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as HTMLElement)
const app = (
  <StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </StrictMode>
)

root.render(app)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
