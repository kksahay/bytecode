// @ts-ignore
import ReactDOM from 'react-dom';
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
)
