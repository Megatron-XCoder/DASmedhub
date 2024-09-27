 import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import Navbar from "../Navbar.jsx";

function ProfileForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        birthDate: '',
        day: '',
        year: '',
        email: '',
        location: '',
        phoneNumber: '',
        avatar: null,
        avatarPreview: null,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setFormData((prevData) => ({
                ...prevData,
                avatar: img,
                avatarPreview: URL.createObjectURL(img),
            }));
        }
    };

    const handleRemoveImage = () => {
        setFormData((prevData) => ({
            ...prevData,
            avatar: null,
            avatarPreview: null,
        }));
    };

    return (
        <>
            <Navbar />

            <div className="relative mt-20 sm:mt-20 md:mt-18 max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-600 mb-4">Basic Information</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Update your profile information below.</p>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-green-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                            placeholder="Emma"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-green-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                            placeholder="Roberts"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-green-700">
                            Gender
                        </label>
                        <select
                            id="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                        >
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label htmlFor="birthDate" className="block text-sm font-medium text-green-700">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-green-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                            placeholder="emma@mail.com"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-green-700">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                            placeholder="Florida, USA"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-green-700">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                            placeholder="+123 0123 456 789"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="col-span-2 md:col-span-1 flex flex-col sm:flex-row items-center space-x-4">
                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700">Select and Upload image</label>
                            <span className="text-xs text-gray-500">.svg, .png, .jpg (size 400x400px)</span>
                            <input
                                type="file"
                                accept=".svg, .png, .jpg"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            {formData.avatarPreview && (
                                <img
                                    src={formData.avatarPreview}
                                    alt="Avatar Preview"
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                            )}
                            <button
                                type="button"
                                className="bg-gradient-to-r from-teal-500 to-green-600 text-white py-2 px-4 rounded-md"
                                onClick={() => document.querySelector('input[type="file"]').click()}
                            >
                                Upload Avatar
                            </button>
                            <button
                                type="button"
                                className="bg-gray-300 text-black py-2 px-4 rounded-md"
                                onClick={handleRemoveImage}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProfileForm;
