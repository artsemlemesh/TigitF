import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import './tailwind.css'
import MyRoute from './MyRoute'
import Header from './components/header'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <MyRoute/>
    </BrowserRouter>
      
    </>
  )
}

export default App
