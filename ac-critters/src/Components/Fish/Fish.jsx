import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Fish = () => {

    const [dataObjFish, setDataObjFish] = useState("");


    useEffect( () => {
        let allUrl = `https://acnhapi.com/v1/fish/`;
        const makeApiCall = async () => {
            const response = await fetch(allUrl);
            const json = await response.json();
            setDataObjFish(json);
        }
        makeApiCall();
    }, []);
  

    const allFishValues = Object.values(dataObjFish).map((element, index) => {
        return (
            <div  key={index}>
                <Link to={'/' + element['file-name']}>
                    <img  src={element.icon_uri} alt={element.name[0]} className='crittersBorder' />
                </Link>
            </div>
        )
    })
    // console.log('allFishValues - ', allFishValues)
            
    return (
        <>
            <h1>Fish!</h1>
            <div className='all-critters-grid'>
                {allFishValues}
            </div>
        </>
    )
   
}


export default Fish