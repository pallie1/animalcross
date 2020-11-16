import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import months from '../../Helpers/months'

const Fish = () => {

    const [dataObjFish, setDataObjFish] = useState("")
    const [hiddenFish, setHiddenFish] = useState([])


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
            <div  key={Math.random(5000)}>
                <Link to={'/' + element['file-name']}>
                    <div className='critters-border'>
                        <img  src={element.icon_uri} alt={element.name[0]} className={hiddenFish.includes(element.id) ? 'hide critters-border' : 'critters-border' } />
                    </div>
                </Link>
            </div>
        )
    })

    const listMonths = Object.values(months).map((month, index) => {
        return (
            <h3 key={index} className='cursor-point' onClick={() => {hideTheseFish(index+1)}}>{month}</h3>
        )
    })
        
    const hideTheseFish = chosenMonth => {
        const hideHelperArr = []
        Object.values(dataObjFish).forEach(fish => {
            if (chosenMonth !== "") {
                if (!fish.availability['month-array-northern'].includes(chosenMonth)) {
                    hideHelperArr.push(fish.id)
                }  
            }
            return hideHelperArr
        })
        setHiddenFish(hideHelperArr)
    }
            
    return (
        <>
            <h1 onClick={() => {setHiddenFish([])}}>All Fish!</h1>
            <div className='months-grid'>
                {listMonths}
            </div>
            <div className='all-critters-grid'>
                {allFishValues}
            </div>
        </>
    ) 
}

export default Fish