import React, { useState } from "react"
import logo from "./assets/logo.jpg"
import { FaBars, FaXmark } from "react-icons/fa6"
import { Link } from "react-router-dom"
// import { Link } from "react-scroll";


function Navbar() {
	const [ismenuopen, setismenuopen] = useState(false)
	const togglemenu = () => {
		setismenuopen(!ismenuopen)
	}
	const navitems = [
		{ link: "Home", path: "home" },
		{ link: "Crops", path: "crops" },
		{ link: "Fruits", path: "fruits" },
		{ link: "Animals", path: "animals" },
		{link: "Create", path: "create" },
	]

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
							<Link to="/home" className="block hover:text-gray-500">Home</Link>
							<Link to="/crops" className="block hover:text-gray-500">Crops</Link>
							<Link to="/fruits" className="block hover:text-gray-500">Fruits</Link>
							<Link to="/animals" className="block hover:text-gray-500">Animals</Link>
							<Link to="/create" className="block hover:text-gray-500">Create</Link>
							<Link to="/profile" className="block hover:text-gray-500">Profile</Link>


							{/* {navitems.map(({ link, path }) => (
								<a
									key={link}
									href={path}
									className=" block hover:text-gray-500"
								>
									{link}
								</a>
							))} */}
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

			<div className={` space-y-4 px-4 pt-20 pb-5 bg-secondary text-xl ${ismenuopen ? " block fixed top-0 right-0 left-0" : " hidden"}`}>
			<Link to="/home" className="block hover:text-gray-500">Home</Link>
							<Link to="/crops" className="block hover:text-gray-500">Crops</Link>
							<Link to="/fruits" className="block hover:text-gray-500">Fruits</Link>
							<Link to="/animals" className="block hover:text-gray-500">Animals</Link>
							<Link to="/create" className="block hover:text-gray-500">Create</Link>
							<Link to="/profile" className="block hover:text-gray-500">Profile</Link>


				{/* {navitems.map(({ link, path }) => (
					<a
						key={link}
						href={path}
						className=" block hover:text-gray-500"
					>
						{link}
					</a>
				))} */}
				<button className=" hover:bg-secondary py-2 px-4 transition-all duration-500 rounded hover:text-white bg-indigo-600">
					Logout
				</button>
			</div>
		</>



	)
}

export default Navbar
