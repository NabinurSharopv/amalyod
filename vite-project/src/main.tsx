import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'
import ProviderConf from './router/provider-conf/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderConf>
    <RouterProvider router={router} />
    </ProviderConf>
  </StrictMode>,
)
