import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { FaCircleArrowRight } from "react-icons/fa6";
import ErrorPopup from "../ErrorPopup.jsx";
import SuccessPopup from "../SuccessPopup.jsx";

function SpecialistRegisterPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        rePassword: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            // await axios.post('https://vsgoi-website.onrender.com/signup', formData);
            setSuccess('User created successfully');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('Something went wrong');
            }
        }
    };

    return (
        <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/SpecialistReg-Background.jpg')" }}>
            {error && <ErrorPopup message={error} />}
            {success && <SuccessPopup message={success} />}

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            <div className="relative z-10 rounded-3xl border-2 border-white backdrop-blur-xl w-full max-w-lg mx-auto p-6 sm:p-10 lg:p-12">
                <section className="font-['raleway']">
                    <h1 className="text-4xl sm:text-5xl font-bold text-center">
                        <span className="text-green-500">DAS</span>
                        <span className="text-orange-500">medhub</span>
                    </h1>
                    <div className="flex items-center justify-center py-4 sm:py-6 lg:py-6">
                        <div className="w-full max-w-sm xl:max-w-md">
                            <h2 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight text-teal-400 text-center">Sign up</h2>
                            <p className="mt-3 text-sm sm:text-base text-white text-center">
                                Already have an account?{' '}
                                <Link to="/Signin" title="" className="font-bold text-teal-400 transition-all duration-200 hover:underline">
                                    Sign In
                                </Link>
                            </p>
                            <form onSubmit={handleSubmit} className="mt-4 space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="fullName" className="text-sm sm:text-base font-bold text-green-500">
                                            Full Name
                                        </label>
                                        <input
                                            className="h-10 w-full rounded-md border shadow-lg p-3 focus:border-teal-500 text-gray-600 bg-transparent placeholder:text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                                            type="text"
                                            placeholder="Enter Full Name"
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-sm sm:text-base font-bold text-green-500">
                                            Email Address
                                        </label>
                                        <input
                                            className="h-10 w-full rounded-md border shadow-lg p-3 focus:border-teal-500 text-gray-600 bg-transparent placeholder:text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                                            type="email"
                                            placeholder="Enter Email Address"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="password" className="text-sm sm:text-base font-bold text-green-500">
                                                Password
                                            </label>
                                            <input
                                                className="h-10 w-full rounded-md border shadow-lg p-3 focus:border-teal-500 text-gray-600 bg-transparent placeholder:text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                                                type="password"
                                                placeholder="Enter Password"
                                                id="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="rePassword" className="text-sm sm:text-base font-bold text-green-500">
                                                Re-Password
                                            </label>
                                            <input
                                                className="h-10 w-full rounded-md border shadow-lg p-3 focus:border-teal-500 text-gray-600 bg-transparent placeholder:text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                                                type="password"
                                                placeholder="Re-Enter Password"
                                                id="rePassword"
                                                value={formData.rePassword}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full flex items-center text-md justify-center rounded-md bg-gradient-to-r from-teal-500 to-green-600 px-4 py-2.5 font-semibold text-white hover:bg-black/80"
                                >
                                    Create Account <FaCircleArrowRight className="ml-2" size={16} />
                                </Button>
                            </form>

                            <div className="mt-5">
                                <p className="text-center text-sm sm:text-base text-white">
                                    ---------- Or Try With ----------
                                </p>
                                <button
                                    type="button"
                                    className="relative mt-4 w-full inline-flex items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black"
                                >
                                    <span className="mr-2">
                                        <svg
                                            className="h-6 w-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            />
                                        </svg>
                                    </span>
                                    <Link to="/Signup">
                                        Sign up with Google
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SpecialistRegisterPage;
