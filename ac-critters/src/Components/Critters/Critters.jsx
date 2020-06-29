import React, { useState, useEffect } from 'react';
import SingleCrit from '../SingleCrit/SingleCrit';
// import SingleCrit from './Components/SingleCrit/SingleCrit';
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


    const handleClick = (element) => {
        // console.log("I've been clicked", element)
        setClickData([element])
        // setClickNameKey(element)
    }


    // const allCrittersKeys = Object.keys(dataObj).map((element, index) => {
    //     return console.log('allCritterKeys element -', element)
        // return (
        //     element
        // )
    // })
    // console.log(allCrittersKeys)
  

    const allCrittersValues = Object.values(dataObj).map((element, index) => {
        return (
            <img onClick={ () => handleClick(element)} src={element.icon_uri} alt={element.name[0]} key={index} className='crittersBorder' />
        )
    })
    console.log(allCrittersValues)
            
    return (
        <>
            <h1>Critters!</h1>
            <div className='all-critters-grid'>
                {allCrittersValues}
            </div>
            <SingleCrit clickData={clickData} />
        </>
    )
   
}


export default Critters