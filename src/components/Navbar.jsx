import React, { useState } from "react"
import logo from "./assets/logo.jpg"
import { FaBars, FaXmark } from "react-icons/fa6"

function Navbar() {
	const [ismenuopen, setismenuopen] = useState(false)
	const togglemenu = () => {
		setismenuopen(!ismenuopen)
	}

	return (
		<>
			<nav className=" bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
				<div className=" text-lg container mx-auto flex justify-between items-center font-medium">
					<div className=" flex space-x-14 items-center">
						<a
							href="/"
							className=" text-2xl font-semibold flex items-center space-x-3 text-primary"
						>
							<img
								src={logo}
								alt=""
								className=" max-w-10 rounded-lg inline-block items-center"
							/>
							<span className=" text-2xl">Product Marketing App </span>
						</a>

						<ul className=" md:flex space-x-12 hidden">
							<li className="block hover:text-gray-500">Home</li>
							<li className="block hover:text-gray-500">About</li>
						</ul>
					</div>

					<div className=" hidden md:flex">
						<button className=" bg-secondary py-2 px-4 transition-all duration-500 rounded hover:text-white hover:bg-indigo-600 ">
							Logout
						</button>
					</div>
					{/* only on mobile phones */}
					<div className=" md:hidden">
						<button
							onClick={togglemenu}
							className=" text-white focus:outline-none focus:text-gray-300"
						>
							{ismenuopen ? (
								<FaXmark className=" w-6 h-6 text-primary" />
							) : (
								<FaBars className=" w-6 h-6 text-primary " />
							)}
						</button>
					</div>
				</div>
			</nav>
			<div className={`space-y-4 px-4 pt-20 pb-5 bg-secondary text-xl ${ismenuopen ? " block fixed top-0 right-0 left-0" : " hidden"}`}>
				<ul>
					<li className="block hover:text-gray-500">Home</li>
				<li className="block hover:text-gray-500">About</li>
				</ul>

				<button className=" hover:bg-secondary py-2 px-4 transition-all duration-500 rounded hover:text-white bg-indigo-600">
					Logout
				</button>
			</div>
		</>
	)
}

export default Navbar
