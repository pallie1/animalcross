import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function SuggestionList(props) {

    console.log('suggestion list - ', props.wordFromSearch.length)


    
    const [dataObjCrit, setDataObjCrit] = useState("");
    const [dataObjFish, setDataObjFish] = useState("");

    useEffect( () => {
        let allUrl = `https://acnhapi.com/v1/bugs/`;
        const makeApiCall = async () => {
            const response = await fetch(allUrl);
            const json = await response.json();
            setDataObjCrit(json);
        }
        makeApiCall();
    }, []);

    useEffect( () => {
        let allUrl = `https://acnhapi.com/v1/fish/`;
        const makeApiCall = async () => {
            const response = await fetch(allUrl);
            const json = await response.json();
            setDataObjFish(json);
        }
        makeApiCall();
    }, []);

    console.log('dataObjCrit - ', dataObjCrit)


    const allCrittersValues = Object.values(dataObjCrit).map((element, index) => {
        // console.log('values element - ', element)
        for (let i=0; i<element['file-name'].length; i++) {
            if (props.wordFromSearch.length === 0 || props.wordFromSearch.length === 1) {
                return null
            } else if (element['file-name'].indexOf(props.wordFromSearch) > -1) {
                return (
                    <div  key={index}>
                        <Link to={'/' + element['file-name']}>
                            <img  src={element.icon_uri} alt={element.name[0]} className='crittersBorder' />
                        </Link>
                    </div>
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
                    <div  key={index}>
                        <Link to={'/' + element['file-name']}>
                            <img  src={element.icon_uri} alt={element.name[0]} className='crittersBorder' />
                        </Link>
                    </div>
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