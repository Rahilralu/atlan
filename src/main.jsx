import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CustomerSupportDashboard from './components/CustomerSupportDashboard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomerSupportDashboard />
  </StrictMode>,
)
