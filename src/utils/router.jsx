import { createBrowserRouter } from "react-router-dom";
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Service from '../pages/Service.jsx';
import ServiceDetails from '../pages/ServiceDetails.jsx';
import News from '../pages/News.jsx';
import NewsDetails from '../pages/NewsDetails.jsx';
import RootLayout from '../components/layout/index.jsx';
import App from '../App.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element:
      <App />
  },
  {
    path: '/haqqimizda',
    element: <RootLayout>
      <About />
    </RootLayout>
  },
  {
    path: '/elaqe',
    element: <RootLayout><Contact /></RootLayout>
  },
  {
    path: '/xidmetler',
    element: <RootLayout> <Service /></RootLayout>
  },
  {
    path: '/xidmetler/:slug',
    element: <RootLayout> <ServiceDetails /></RootLayout>
  },
  {
    path: '/xeberler',
    element: <RootLayout> <News /></RootLayout>
  },
  {
    path: '/xeberler/:slug',
    element: <RootLayout> <NewsDetails /></RootLayout>
  }
])
