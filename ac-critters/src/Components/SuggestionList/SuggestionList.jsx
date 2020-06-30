import React, { useState, useEffect } from 'react'


export default function SuggestionList(props) {

    console.log('suggestion list - ', props)
    
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

    return (
        <>
         <h1>Suggestion List</h1>
        </>
    ) 
   
}