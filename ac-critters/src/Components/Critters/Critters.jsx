import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import SingleCrit from '../SingleCrit/SingleCrit';

import './critters.scss';


const Critters = () => {

    const [dataObj, setDataObj] = useState("");
    const [clickData, setClickData] = useState([]);
    // const [clickNameKey, setClickNameKey] = useState("");

    useEffect( () => {
        let allUrl = `https://acnhapi.com/v1/bugs/`;
        const makeApiCall = async () => {
            const response = await fetch(allUrl);
            const json = await response.json();
            setDataObj(json);
        }
        makeApiCall();
    }, []);


    // const handleClick = (element) => {
    //     // console.log("I've been clicked", element)
    //     setClickData([element])
    //     // setClickNameKey(element)
    // }


    // const allCrittersKeys = Object.keys(dataObj).map((element, index) => {
    //     return console.log('allCritterKeys element -', element)
        // return (
        //     element
        // )
    // })
    // console.log(allCrittersKeys)
  

    const allCrittersValues = Object.values(dataObj).map((element, index) => {
        return (
            <div  key={index}>
                <Link to={'/' + element['file-name']}>
                {/* onClick={ () => handleClick(element)} */}
                    <img  src={element.icon_uri} alt={element.name[0]} className='crittersBorder' />
                </Link>
            </div>
        )
    })
    console.log('allCritersValues - ', allCrittersValues)
    console.log('clickData from Critters - ', clickData)
            
    return (
        <>
            <h1>Critters!</h1>
            {/* <SingleCrit clickData={clickData} /> */}
            <div className='all-critters-grid'>
                {allCrittersValues}
            </div>
        </>
    )
   
}


export default Critters