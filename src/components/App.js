import React, { useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList";
import DisplayForm from "./DisplayForm";
import { Card } from "semantic-ui-react"

import hogs from "../porkers_data";

function App() {
	const [sort, setSort] = useState("")
	const [searchParam, setSearchParam] = useState("")
	const [listOfHogs, setListOfHogs] = useState(hogs)
	const [filterGreased, setFilterGreased] = useState("No")

	function handleGrease(e) {
		setFilterGreased(e.target.value)
	}

	function handleSetSort(e){
		setSort(e.target.value)
		console.log(e.target.value)
	}

	


	return (
		<div className="App">
			<Nav />
			<DisplayForm 
				greased={filterGreased}
				toggleGreased={handleGrease}
				onSortName={handleSetSort}
			/>
			<TileList 
				hogList = {listOfHogs} 
				filterGreased={filterGreased}
				sortBy={sort}
			/>
		</div>
	);
}

export default App;
