import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import PatientRegisterPage from "./Components/Pages/PatientRegister.jsx";
import SpecialistRegisterPage from "./Components/Pages/SpecialistRegister.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/patient-register" element={<PatientRegisterPage/>} />
                <Route exact path="/Specialist-register" element={<SpecialistRegisterPage/>} />

            </Routes>
        </Router>
    )
}

export default App
