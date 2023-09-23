import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout.jsx'
import Home from '../pages/Home.jsx'
import Index from '../pages/places/index.jsx'
import Show from '../pages/places/show.jsx'
import Create from '../pages/places/create.jsx'
import Edit from '../pages/places/edit.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/places',
        element: <Index />,
      },
      {
        path: '/places/:id',
        element: <Show />,
      },
      {
        path: '/places/create',
        element: <Create />,
      },
      {
        path: '/places/:id/edit',
        element: <Edit />,
      },
    ],
  },
])
