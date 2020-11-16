import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import months from '../../Helpers/months'
import './critters.scss'

const Critters = () => {

    const [dataObj, setDataObj] = useState("")
    const [hiddenCritters, setHiddenCritters] = useState([])
    const [clicked, setClicked] = useState("")

    useEffect( () => {
        let allUrl = `https://acnhapi.com/v1/bugs/`
        const makeApiCall = async () => {
            const response = await fetch(allUrl)
            const json = await response.json()
            setDataObj(json)
        }
        makeApiCall()
    }, [])

    const allCrittersValues = Object.values(dataObj).map(critter => {
        return (
            <div  key={Math.random(5000) }>
                <Link to={'/' + critter['file-name']} >
                    <div className='critters-border'>
                        <img  src={critter.icon_uri} alt={critter.name[0]} className={hiddenCritters.includes(critter.id) ? 'hide critters-border' : 'critters-border' } />
                    </div>
                </Link>
            </div>
        )
    })
        
    const listMonths = Object.values(months).map((month, index) => {
        return (
            <h3 key={index} className={ clicked === index ? 'cursor-point cute-button selected-month' : 'cursor-point cute-button'} onClick={() => {hideTheseCritters(index+1)}}>{month}</h3>
        )
    })
        
    const hideTheseCritters = chosenMonth => {
        const hideHelperArr = []
        Object.values(dataObj).forEach(critter => {
            if (chosenMonth !== "") {
                if (!critter.availability['month-array-northern'].includes(chosenMonth)) {
                    hideHelperArr.push(critter.id)
                }  
            }
            return hideHelperArr
        })
        setHiddenCritters(hideHelperArr)
        setClicked(chosenMonth-1)
    }

    const resetState = () => {
        setHiddenCritters([])
        setClicked('')
    }

    return (
        <>
            <h1 className='cursor-point animals-title-margin' onClick={() => {resetState()}}>All Critters!</h1>
            <div className='months-grid'>
                {listMonths}
            </div>
            <div className='all-critters-grid'>
                {allCrittersValues}
            </div>
        </>
    )   
}

export default Critters