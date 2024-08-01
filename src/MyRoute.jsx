import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import Blog from "./pages/PrepForRiding/PreparationForRiding"
import BookMotorbike from "./pages/BookMotorbike/BookMotorBike"
import FAQ from "./pages/FAQ/FAQ"
import MotorbikeTours from "./pages/motorbikeTours/motorbikeTours"







const MyRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/faqs' element={<FAQ/>} />
            <Route path='/bookMotorbike' element={<BookMotorbike/>} />
            <Route path='/motorbikeTours' element={<MotorbikeTours/>} />

        </Routes>
    )
}


export default MyRoute