import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import './tailwind.css'
import MyRoute from './MyRoute'
import Header from './components/header'
import Footer from './components/footer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <MyRoute/>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
