import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function SuggestionList(props) {

    console.log('suggestion list - ', props.wordFromSearch)
    
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

    console.log('dataObj - ', dataObj)


    const allCrittersValues = Object.values(dataObj).map((element, index) => {
        // console.log('values element - ', element)
        // if (element['file-name'] === props.wordFromSearch) {
        for (let i=0; i<element['file-name'].length; i++) {
        if (element['file-name'].indexOf(props.wordFromSearch) > -1) {
            console.log('matched')
            return (

                <div  key={index}>
                <Link to={'/' + element['file-name']}>
                    <img  src={element.icon_uri} alt={element.name[0]} className='crittersBorder' />
                </Link>
            </div>
            )
        } 
        // else if (element['file-name'] === props.wordFromSearch) {
        //     return (

        //         <div  key={index}>
        //         <Link to={'/' + element['file-name']}>
        //             <img  src={element.icon_uri} alt={element.name[0]} className='crittersBorder' />
        //         </Link>
        //     </div>
        //     )}
         
        else {return null}
    }
    })

    // // worrking version. this is before I messed with it
    // const allCrittersValues = Object.values(dataObj).map((element, index) => {
    //     console.log('values element - ', element)
    //     if (element['file-name'] === props.wordFromSearch) {
    //         console.log('matched')
    //         return (

    //             <div  key={index}>
    //             <Link to={'/' + element['file-name']}>
    //                 <img  src={element.icon_uri} alt={element.name[0]} className='crittersBorder' />
    //             </Link>
    //         </div>
    //         )
    //     } else {return null}
    // })

            
    return (
        <>
            <h1>Suggestion List!</h1>
            <div className='all-critters-grid'>
                {allCrittersValues}
            </div>
        </>
    )

    // let temp = []
    // const searchCritters = () => {
    //     let temp = [];

    //     // let list = allCrittersKeys.filter()
    //     // console.log('list - ', list)
    // }

    // searchCritters();

  
   
}