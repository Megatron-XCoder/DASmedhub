import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import PatientRegisterPage from "./Components/Pages/PatientRegister.jsx";
import SpecialistRegisterPage from "./Components/Pages/SpecialistRegister.jsx";
import AboutUs from "./Components/Pages/AboutUs.jsx";
import Blog from "./Components/Pages/Blog.jsx";
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/Patient-register" element={<PatientRegisterPage/>} />
                    <Route exact path="/Specialist-register" element={<SpecialistRegisterPage/>} />
                    <Route exact path="/About-us" element={<AboutUs/>} />
                    <Route exact path="/Blog" element={<Blog/>} />

                </Routes>
            </Router>
        </div>
    )
}

export default App
