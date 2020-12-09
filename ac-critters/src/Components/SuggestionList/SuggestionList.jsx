import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function SuggestionList(props) {
    
    const [dataObjCrit, setDataObjCrit] = useState("");
    const [dataObjFish, setDataObjFish] = useState("");

    useEffect( () => {
        let allCritUrl = `https://acnhapi.com/v1/bugs/`;
        const makeCritApiCall = async () => {
            const response = await fetch(allCritUrl);
            const jsonCrit = await response.json();
            setDataObjCrit(jsonCrit);
        }
        
        let allFishUrl = `https://acnhapi.com/v1/fish/`;
        const makeFishApiCall = async () => {
            const response = await fetch(allFishUrl);
            const jsonFish = await response.json();
            setDataObjFish(jsonFish);
        }

        makeCritApiCall();
        makeFishApiCall();
    }, []);

    const allCrittersValues = Object.values(dataObjCrit).map((element, index) => {
        for (let i=0; i<element['file-name'].length; i++) {
            if (props.wordFromSearch.length === 0 || props.wordFromSearch.length === 1) {
                return null
            } else if (element['file-name'].indexOf(props.wordFromSearch) > -1) {
                return (
                    <Link to={'/' + element['file-name']} key={index}>
                        <img  src={element.icon_uri} alt={element.name[0]} className='critters-border' />
                    </Link>
                    )
            } else return null
        }
    })

    const allFishValues = Object.values(dataObjFish).map((element, index) => {
        for (let i=0; i<element['file-name'].length; i++) {
            if (props.wordFromSearch.length === 0 || props.wordFromSearch.length === 1) {
                return null
            } else if (element['file-name'].indexOf(props.wordFromSearch) > -1) {
                return (
                    <Link to={'/' + element['file-name']} key={index}>
                        <img  src={element.icon_uri} alt={element.name[0]} className='critters-border' />
                    </Link>
                    )
            } else return null
        }
    })
            
    return (
        <>
            <h1>Suggestion List!</h1>
            <div className='all-critters-grid'>
                {allCrittersValues}
                {allFishValues}
            </div>
        </>
    )   
}