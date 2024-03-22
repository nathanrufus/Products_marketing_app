import React, { useState } from "react"
import logo from "./assets/logo.jpg"
import { GrLanguage } from "react-icons/gr"
import { FaBars, FaXmark } from "react-icons/fa6"

function Home() {
	const [ismenuopen, setismenuopen] = useState(false)
	const togglemenu = () => {
		setismenuopen(!ismenuopen)
	}
	const navitems = [
		{ link: "overview", path: "home" },
		{ link: "Feature", path: "feature" },
		{ link: "About", path: "about" },
		{ link: "Pricing", path: "pricing" },
	]
	return (
		<>
			<nav className=" bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 left-0 right-0 ">
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
							<span>xyz</span>
						</a>
						<ul className=" md:flex space-x-12 hidden">
							{navitems.map(({ link, path }) => (
								<a
									key={link}
									href={path}
									className=" block hover:text-gray-500"
								>
									{link}
								</a>
							))}
						</ul>
					</div>
					{/* language and signup */}
					<div className=" space-x-12 hidden md:flex items-center">
						<a
							href="/"
							className="hidden lg:flex items-center hover:text-secondary"
						>
							<GrLanguage className=" mr-2" />
							<span>Language</span>
						</a>
						<button className=" bg-secondary py-2 px-4 transition-all duration-500 rounded hover:text-white hover:bg-indigo-600">
							Sign up
						</button>
					</div>
					{/* menu btn only on mobile */}
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
				
					{navitems.map(({ link, path }) => (
						<a
							key={link}
							href={path}
							className=" block hover:text-gray-500"
						>
							{link}
						</a>
					))}
				
			</div>
		</>

	)
}

export default Home
