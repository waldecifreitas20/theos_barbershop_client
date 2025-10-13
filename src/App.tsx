import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { Router } from './routes/routes.tsx';
import { RouterProvider } from 'react-router';
import { BarbersProvider } from './context/BarbersContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BarbersProvider>
      <RouterProvider router={Router} />
    </BarbersProvider>
  </StrictMode>,
)