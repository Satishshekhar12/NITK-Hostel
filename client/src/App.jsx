import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import { Outlet } from 'react-router-dom'
import useScrollToTop from './hooks/useScrollToTop'
import { Toaster } from 'react-hot-toast'

function App() {
  useScrollToTop();

  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: '#4aed88',
            },
          },
          error: {
            duration: 4000,
            theme: {
              primary: '#ff4b4b',
            },
          },
        }}
      />
    </>
  )
}

export default App
