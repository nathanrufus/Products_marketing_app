import React from "react"
import logo from "./assets/logo.jpg"

function Details() {
	return (
		<div className=" md:px-12 p-4 max-w-screen-2xl ">
			<div className=" md:flex items-center justify-between mx-auto space-x-10 p-4">
				<div className=" md:w-1/2 items-center justify-between">
					<img src={logo} alt="" className=" w-full max-w-96 rounded-lg " />
					<div className=" mt-4 flex justify-between items-center p-3">
						<div className=" flex space-x-2 ">
							<img
								src={logo}
								alt=""
								className=" w-full max-w-6 rounded-[50%]"
							/>
							<h3 className=" text-xl text-green-600 hover:text-tertiary ">
								Maize
							</h3>
						</div>
					</div>
					<div className=" p-3 ">
						<span className=" text-xl text-primary font-semibold my-4">
							Description:
						</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
							eveniet provident quos, animi quibusdam architecto expedita
							incidunt earum molestiae dolorum tempora facere ea consequatur
							illo est, quis obcaecati possimus accusantium?
						</p>
					</div>
				</div>
				<div className=" md:w-1/2 items-center justify-between">
					<h1 className="text-xl text-primary font-semibold my-4">Owner Contact</h1>
					<div>
						<h2 className=" text-xl text-green-500">
							Phone no.: <span className=" text-tertiary"> 0796558856</span>
						</h2>
						<h2 className="text-xl text-green-500">
							Email: <span className=" text-tertiary">rufus@gmail.com</span>
						</h2>
						<h3 className=" text-xl text-green-500">Price</h3>
						<span className=" text-primary bg-tertiary rounded-sm">  ksh 500</span>
					</div>
					<div>
						<h1 className="text-xl text-primary font-semibold my-4">Send email</h1>
						<form>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name: "
								className=" bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded"
							/>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Your email: "
								className=" bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mt-2"
							/>

							<textarea
								name="message"
								id="message"
								placeholder="Message: "
								className=" bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mt-2"
							></textarea>

							<button className="btn bg-blue-500 py-2 px-10 text-white hover:bg-white hover:text-blue-500 block transition-all duration-500 rounded mt-2">
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Details
