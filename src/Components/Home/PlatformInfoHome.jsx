import React from "react";

function PlatformInfoHome() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 gap-y-10 gap-x-10">
                {/* Steps Section */}
                <div className="flex flex-col gap-y-16 max-w-lg relative w-full md:w-1/2">
                    <img
                        alt="step numbering"
                        className="absolute left-0 top-0 h-auto w-10 md:w-14"
                        src="src/assets/align-numbering.png"
                    />
                    <div className="pl-14 mt-2 sm:pl-16 md:pl-20">
                        <h5 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Create Your Profile
                        </h5>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
                            Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.
                        </p>
                    </div>

                    <div className="pl-14 sm:pl-16 md:pl-20">
                        <h5 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Choose Your Service
                        </h5>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
                            Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straightforward.
                        </p>
                    </div>

                    <div className="pl-14 sm:pl-16 md:pl-20">
                        <h5 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Meet Your Doctor
                        </h5>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
                            Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.
                        </p>
                    </div>
                </div>

                {/* Doctor Image Section */}
                <div className="relative flex items-center justify-center w-full md:w-1/2">
                    <img
                        alt="doctor"
                        className="h-48 sm:h-64 md:h-80 lg:h-[28rem] xl:h-[34rem] object-cover"
                        src="src/assets/HomePlatform-doctor.png"
                    />
                </div>
            </div>
        </>
    );
}

export default PlatformInfoHome;
