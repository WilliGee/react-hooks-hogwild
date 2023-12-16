import React from "react";
// import { Card } from "semantic-ui-react";
import Tile from "./Tile";

function TileList({hogList, filterGreased, sortBy}){

    // const singleHog = hogList.filter(hog => hog.name === searchParam)
    
    // console.log(singleHog)

    function handleData(){
		
		const filteredSwine = 
			filterGreased === "Yes" ? 
				hogList.filter((hog) => hog.greased) : [...hogList];
        
        if (!sortBy) return filteredSwine;

        if (sortBy === "Weight") return filteredSwine.sort((firsthog, secondhog) => firsthog.weight - secondhog.weight)

        if (sortBy === "Name") return filteredSwine.sort((firsthog, secondhog) => {
            if(firsthog.name > secondhog.name){
                return 1
            }else if(firsthog.name < secondhog.name){
                return -1
            }
            return 0
        })

		return filteredSwine
			
	}

    const allHogs = handleData().map((hog) => (
    <Tile key={hog.name} hogInfo={hog}
     />
     ) 
    )

return (
    <Card.Group itemsPerRow={2}>
        { allHogs }
    </Card.Group>
    
);
}

export default TileList