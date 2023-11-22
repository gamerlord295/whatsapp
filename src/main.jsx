import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import Topbar from './topbar.jsx'
import Bodycontent from './bodycontent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Topbar />
    <Header />
    <Bodycontent />
  </React.StrictMode>
)
