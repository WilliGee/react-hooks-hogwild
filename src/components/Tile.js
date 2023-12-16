import React, {useState} from "react";
import {Card, Image} from "semantic-ui-react"

function Tile(props){

    // console.log(props)
    const {greased, image, name, specialty, weight} = props.hogInfo;
    const medal = props.hogInfo['highest medal achieved'];
    
    const [cardHide, setCardHide] = useState(true);

    const showGrease = greased === true ? "Greased" : null

    function changeClass() {
       setCardHide((cardHide)=> !cardHide)

    }


    return (
        <Card className="pigTile" onClick={changeClass}>
            <Image src={image} ></Image>
            <h3 className="hoggyText">
                {name}
            </h3>
            <ul className={cardHide ? "hidden" : ""}>
                <li>Specialty: {specialty}</li>
                <li>Weight: {weight}</li>
                <li>Highest Medal Achieved: {medal}</li>
                <li>{showGrease}</li>
            </ul>
        </Card>
    )
}

export default Tile