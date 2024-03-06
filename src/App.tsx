import './App.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Vita from './pages/Vita/Vita';
import TechStack from './pages/TechStack/TechStack';
import Personal from './pages/Personal';
import Layout from './pages/Layout';
import Home from './pages/Home';


export const HOME_URL = '/'
export const VITA_URL = '/lebenslauf'
export const TECH_STACK_URL = '/tech-stack'
export const PERSONAL_URL = '/persoenliches'
export const FAQ_URL = '/faq'

const router = createBrowserRouter([
  {path: '/', element: <Layout />,
    children: [
      {path: '/', element: <Home />},
      {path: VITA_URL, element: <Vita />},
      {path: TECH_STACK_URL, element: <TechStack />},
      {path: PERSONAL_URL, element: <Personal />},
      {path: FAQ_URL, element: <Personal />},
    ]
  },
  
])

export const App = () => {

  

  return <RouterProvider router={router} />
}
