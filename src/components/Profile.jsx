import React from "react";
import logo from "./assets/logo.jpg"


function Profile() {
    return <div className=" max-w-screen-2xl mt-20 md:px-14 p-4 mx-auto">
        <div className="">
            <h1 className=" md:text-5xl text-blue-600 ">My posts</h1>
            <div className=" mt-5  sm:flex-grow flex overflow-scroll space-x-9">
                <div className=" flex-shrink-0 w-full max-w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img src={logo} alt="" className=" w-full max-w-60 rounded-lg " />
                    <div className=" mt-4 flex items-baseline  p-3 flex-col">
                        <div className=" flex space-x-2">
                            <img
                                src={logo}
                                alt=""
                                className=" w-full max-w-6 rounded-[50%]"
                            />
                            <h3 className=" text-xl text-green-600 hover:text-tertiary ">
                                Maize
                            </h3>
                        </div>
                        <div className=" flex items-center justify-between mt-3 space-x-5">
                            <button className="bg-secondary py-2 px-4 transition-all duration-500 rounded hover:text-white hover:bg-indigo-600  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Edit
                            </button>
                            <button className="bg-secondary py-2 px-4 transition-all duration-500 rounded hover:text-white hover:bg-indigo-600  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Delete
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Profile;
