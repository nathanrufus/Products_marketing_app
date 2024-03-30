import React from "react";
import Animals from "./Animals";
import Crops from "./Crops";
import Fruits from "./Fruits";
import Footer from "./Footer";

function Home() {
  return <div>
	<Crops/>
	<Fruits/>
	<Animals/>
  </div>;
}

export default Home;
