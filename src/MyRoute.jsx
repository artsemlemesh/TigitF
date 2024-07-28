import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import Blog from "./pages/PrepForRiding/PreparationForRiding"







const MyRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/blog' element={<Blog/>} />
        </Routes>
    )
}


export default MyRoute