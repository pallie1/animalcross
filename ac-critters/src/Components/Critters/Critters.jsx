import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './critters.scss';


const Critters = () => {

    const [dataObj, setDataObj] = useState("");

    useEffect( () => {
        let allUrl = `https://acnhapi.com/v1/bugs/`;
        const makeApiCall = async () => {
            const response = await fetch(allUrl);
            const json = await response.json();
            setDataObj(json);
        }
        makeApiCall();
    }, []);
  

    const allCrittersValues = Object.values(dataObj).map((element, index) => {
        return (
            <div  key={index}>
                <Link to={'/' + element['file-name']}>
                    <img  src={element.icon_uri} alt={element.name[0]} className='crittersBorder' />
                </Link>
            </div>
        )
    })
    // console.log('allCritersValues - ', allCrittersValues)
            
    return (
        <>
            <h1>Critters!</h1>
            <div className='all-critters-grid'>
                {allCrittersValues}
            </div>
        </>
    )
   
}


export default Critters