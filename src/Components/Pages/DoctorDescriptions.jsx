import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../Contexts/AppContext.jsx";
import {assets} from "../../../public/assets_frontend/assets.js";
import {Button} from "@material-tailwind/react";

function DoctorDescriptions() {
    const navigate = useNavigate();
    const {docId} = useParams();
    const {doctors, currencySymbol} = useContext(AppContext);

    const [docInfo, setDocInfo] = useState(null);
    const [docSlot, setDocSlot] = useState([null]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId);
        setDocInfo(docInfo)
        console.log(docInfo)
    }

    const getAvailableSlots = async () => {
        setDocSlot([]);

        // get current date
        let today = new Date();

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            //setting end time of date with index
            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0,);

            //setting Hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

                //add slots to arrays
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })

                //Increment current time by 1 hour
                currentDate.setMinutes(currentDate.getMinutes() + 60);

                setDocSlot(prev => ([...prev, timeSlots]));

            }
        }
    };

    useEffect(() => {
        fetchDocInfo();
    }, [doctors, docId]);

    useEffect(() => {
        getAvailableSlots();
    }, [docInfo]);

    useEffect(() => {
        console.log(docSlot)
    }, [docSlot]);
    



    return docInfo && (
        <>
            <div>
                {/*Doctor details */}
                <div className={"flex flex-col sm:flex-row gap-4"}>
                    <div>
                        <img className={"bg-teal-200 w-full sm:max-w-72 rounded-lg "} src={docInfo.image} alt={"Doctor Image"}/>
                    </div>

                    <div className={"flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0" +
                        " mt-[-80px] sm:mt-0"}>
                        <p className={"flex items-center gap-2 text-2xl font-medium text-gray-900"}>
                            {docInfo.name}
                            <img className={"w-5"} src={assets.verified_icon} alt={"verified icon"}/>
                        </p>

                        <div className={"flex items-center gap-2 text-sm mt-1 text-gray-600"}>
                            <p>{docInfo.degree} - {docInfo.speciality}</p>
                            <Button variant="outlined" size="sm">{docInfo.experience}</Button>
                        </div>

                        <div>
                            <p className={"flex items-center gap-1 text-sm font-medium text-gray-900 mt-3"}>
                                About
                                <img src={assets.info_icon} alt={"info icon"}/>
                            </p>
                            <p className={"text-sm text-gray-500 max-w-[700px] mt-1"}>{docInfo.about}</p>
                        </div>
                        <p className={"text-gray-700 font-medium mt-4"}>
                            Appointment Fee : <span className={"text-gray-700"}>{currencySymbol} {docInfo.fees}</span>

                            <br/>2:42:44
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DoctorDescriptions;