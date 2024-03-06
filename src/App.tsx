import './App.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Vita from './pages/Vita/Vita';
import TechStack from './pages/TechStack/TechStack';
import Layout from './pages/Layout';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact/Contact';


export const HOME_URL = '/'
export const VITA_URL = '/lebenslauf'
export const TECH_STACK_URL = '/tech-stack'
export const FAQ_URL = '/faq'
export const CONTACT_URL = '/kontakt'

const router = createBrowserRouter([
  {path: '/', element: <Layout />,
    children: [
      {path: '/', element: <Home />},
      {path: VITA_URL, element: <Vita />},
      {path: TECH_STACK_URL, element: <TechStack />},
      {path: FAQ_URL, element: <FAQ />},
      {path: CONTACT_URL, element: <Contact />},
    ]
  },
  
])

console.log('--------------------------------------------------------------')
console.log('Hier gibts nicht viel zu sehen, aber den Code finden Sie unter')
console.log('           https://github.com/codeecke/bewerbung')
console.log('--------------------------------------------------------------')

export const App = () => {
  return <RouterProvider router={router} />
}
