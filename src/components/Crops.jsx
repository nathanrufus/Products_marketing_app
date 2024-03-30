import logo from "./assets/logo.jpg"
import { useNavigate } from "react-router-dom";

function Crops() {
	const navigate=useNavigate()
	const detail =()=>{
		navigate('/details')
	}
	return (
		<div className=" md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
			<div>
					<h1 className=" text-primary mb-5 text-xl hover:text-secondary">
						Crops
					</h1>

				<div className=" sm:flex-grow flex overflow-scroll space-x-9 ">
					<div className=" flex-shrink-0 w-full max-w-60  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<img src={logo} alt="" className=" w-full max-w-60 rounded-lg " />
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

							<button onClick={detail} className="bg-secondary py-2 px-4 transition-all duration-500 rounded hover:text-white hover:bg-indigo-600  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								Details
							</button>
						</div>
					</div>
					<div className=" flex-shrink-0 w-full max-w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<img src={logo} alt="" className=" w-full max-w-60 rounded-lg " />
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

							<button className="bg-secondary py-2 px-4 transition-all duration-500 rounded hover:text-white hover:bg-indigo-600  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								Details
							</button>
						</div>
					</div>
					<div className=" flex-shrink-0 w-full max-w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<img src={logo} alt="" className=" w-full max-w-60 rounded-lg " />
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

							<button className="bg-secondary py-2 px-4 transition-all duration-500 rounded hover:text-white hover:bg-indigo-600  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								Details
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Crops
