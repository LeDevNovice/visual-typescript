import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import queryRoot from './utils/queryRoot.ts'
import App from './App.tsx'

import './index.css'

const container = queryRoot('#root');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
