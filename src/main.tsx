import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GetInTouch } from './GetInTouch'
import { Skills } from './Skills'
import { ProjectsContainer } from './ProjectsContainer'

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />
  },
  {
    path: "/projects",
    element: <ProjectsContainer />
  },
  {
    path: "/getintouch",
    element: <GetInTouch />
  },
  {
    path: "/skills",
    element: <Skills />
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <MantineProvider withCSSVariables>
      <RouterProvider router={router}/>
    </MantineProvider>

  </React.StrictMode>,
)
