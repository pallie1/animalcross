import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import months from '../../Helpers/months'
import './critters.scss'

const AllAnimalsDisplay = (props) => {

    const [dataObjAnimals, setDataObjAnimals] = useState("")
    const [hiddenAnimals, setHiddenAnimals] = useState([])
    const [clicked, setClicked] = useState('')

    let followedPath = props.match.path
    if (followedPath === "/critters") {
        followedPath = "/bugs"
    }

    useEffect( () => {
        let allUrl = `https://acnhapi.com/v1${followedPath}`;
        const makeApiCall = async () => {
            const response = await fetch(allUrl);
            const json = await response.json();
            setDataObjAnimals(json);
        }
        makeApiCall();
    }, [followedPath]);

    const allAnimalValues = Object.values(dataObjAnimals).map((element, index) => {
        return (
            <div  key={Math.random(5000)}>
                <Link to={'/' + element['file-name']}>
                    <div className='critters-border'>
                        <img  src={element.icon_uri} alt={element.name[0]} className={hiddenAnimals.includes(element.id) ? 'hide critters-border' : 'critters-border' } />
                    </div>
                </Link>
            </div>
        )
    })

    const listMonths = Object.values(months).map((month, index) => {
        return (
            <h3 key={index} className={ clicked === index ? 'cursor-point cute-button selected-month' : 'cursor-point cute-button'} onClick={() => {hideTheseAnimals(index+1)}}>{month}</h3>
        )
    })
        
    const hideTheseAnimals = chosenMonth => {
        const hideHelperArr = []
        Object.values(dataObjAnimals).forEach(animal => {
            if (chosenMonth !== "") {
                if (!animal.availability['month-array-northern'].includes(chosenMonth)) {
                    hideHelperArr.push(animal.id)
                }  
            }
            return hideHelperArr
        })
        setHiddenAnimals(hideHelperArr)
        setClicked(chosenMonth-1)
    }
    
    const resetState = () => {
        setHiddenAnimals([])
        setClicked('')
    }

    let animalType = props.match.path[1].toUpperCase(0) + props.match.path.substring(2)
            
    return (
        <>
            <h1 className='cursor-point animals-title-margin' onClick={() => {resetState()}}>All {animalType}!</h1>
            <div className='months-grid'>
                {listMonths}
            </div>
            <div className='all-critters-grid'>
                {allAnimalValues}
            </div>
        </>
    ) 
}

export default AllAnimalsDisplay