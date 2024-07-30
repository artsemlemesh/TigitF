import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import Blog from "./pages/PrepForRiding/PreparationForRiding"
import BookMotorbike from "./pages/BookMotorbike/BookMotorBike"







const MyRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/bookMotorbike' element={<BookMotorbike/>} />

        </Routes>
    )
}


export default MyRoute