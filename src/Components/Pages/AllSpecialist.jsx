import {AppContext} from "../Contexts/AppContext.jsx";
import React, {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";


function AllSpecialist() {

    const {speciality} = useParams();
    const navigate = useNavigate()
    const [filterDoc, setFilterDoc] = useState([])

    const {doctors} = useContext(AppContext);

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
        } else {
            setFilterDoc(doctors)
        }
    }

    useEffect(() => {
        applyFilter();
    }, [doctors,speciality]);



    return (
        <>
            <div>
                <p className="text-gray-600">Browse through the doctors specialist.</p>
                <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
                    <div className="flex flex-col gap-4 text-sm text-gray-600">
                        <p onClick={() => speciality === 'General physician' ? navigate("/All-specialists") : navigate("/All-specialists/General physician")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-teal-50 border-teal-100 text-black" : ""}`}>General physician</p>
                        <p onClick={() => speciality === 'Gynecologist' ? navigate("/All-specialists") : navigate("/All-specialists/Gynecologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-teal-50 border-teal-100 text-black" : ""}`}>Gynecologist</p>
                        <p onClick={() => speciality === 'Dermatologist' ? navigate("/All-specialists") : navigate("/All-specialists/Dermatologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-teal-50 border-teal-100 text-black" : ""}`}>Dermatologist</p>
                        <p onClick={() => speciality === 'Pediatricians' ? navigate("/All-specialists") : navigate("/All-specialists/Pediatricians")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-teal-50 border-teal-100 text-black" : ""}`}>Pediatricians</p>
                        <p onClick={() => speciality === 'Neurologist' ? navigate("/All-specialists") : navigate("/All-specialists/Neurologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-teal-50 border-teal-100 text-black" : ""}`}>Neurologist</p>
                        <p onClick={() => speciality === 'Gastroenterologist' ? navigate("/All-specialists") : navigate("/All-specialists/Gastroenterologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-teal-50 border-teal-100 text-black" : ""}`}>Gastroenterologist</p>
                    </div>
                    <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
                        {

                            filterDoc.map((item, index) => (
                                <div
                                    onClick={() => navigate(`/Docter/${item._id}`)}
                                    key={index}
                                    className="border border-teal-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                                >
                                    <img className="bg-teal-50" alt="Doctor Img" src={item.image}/>
                                    <div className="p-4">
                                        <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                            <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                            <p>Available</p>
                                        </div>
                                        <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                                        <p className="text-gray-600 text-sm">{item.speciality}</p>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllSpecialist;