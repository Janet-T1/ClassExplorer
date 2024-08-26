'use client'

import React, { useState } from 'react';

function Profile() {

    const [user, setUser] = useState({
        name: "John Doe",
        studentId: "123456789",
        major: "Computer Science",
        visibility: "visible", // default to "visible"
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleMajorChange = (e) => {
        setUser({
            ...user,
            major: e.target.value,
        });
    };

    const handleVisibilityChange = (e) => {
        setUser({
            ...user,
            visibility: e.target.value,
        });
    };

    return (
        <div>
           
            <div className=" p-4 px-12 mt-10 lg:px-28 lg:mt-12">
                <h1 className="text-3xl lg:text-6xl font-bold">{user.name}</h1>
                <p className="text-gray-800 text-xl lg:text-2xl"> STUDENT ID: {user.studentId}</p>
                <div className="mt-4">
                    <label className="text-black text-xl lg:text-3xl font-semibold">Major: </label>
                    {isEditing ? (
                        <input
                            type="text"
                            value={user.major}
                            onChange={handleMajorChange}
                            className="border border-gray-300 rounded p-1 lg:text-xl"
                        />
                    ) : (
                        <span>{user.major}</span>
                    )}
                </div>
                <div className="mt-4">
                    <label className="text-black text-xl lg:text-3xl font-semibold">Visibility: </label>
                    {isEditing ? (
                        <div className="flex flex-col">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="visible"
                                    checked={user.visibility === "visible"}
                                    onChange={handleVisibilityChange}
                                    className="mr-2"
                                />
                                Visible
                            </label>
                            <label className="flex items-center mt-2">
                                <input
                                    type="radio"
                                    value="anonymous"
                                    checked={user.visibility === "anonymous"}
                                    onChange={handleVisibilityChange}
                                    className="mr-2"
                                />
                                Anonymous
                            </label>
                        </div>
                    ) : (
                        <span>{user.visibility === "visible" ? "Visible" : "Anonymous"}</span>
                    )}
                </div>
                <div className="mt-4">
                    {isEditing ? (
                        <button
                            onClick={handleSaveClick}
                            className="bg-red-700 text-white font-semibold py-1 px-8 hover:bg-red-800"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={handleEditClick}
                            className="bg-red-700 text-white font-semibold py-1 px-8 hover:bg-red-800"
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );

}

export default Profile;