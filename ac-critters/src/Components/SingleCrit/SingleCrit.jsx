import React, { useEffect, useState } from 'react';
import './singleCrit.scss';


const SingleCrit = props => {

    const [singleCrit, setSingleCrit] = useState("");
    const [name, setName] = useState("")

    
    let path = props.location.pathname;
    let clonePath = path.split("").splice(9,path.length-1).join("");
    let wikiURL = `https://animalcrossing.fandom.com/wiki${path}`
  

    useEffect(() => {
        let newUrl = `https://acnhapi.com/v1/bugs${path}`;
        const makeApiCall = async () => {
            const response = await fetch(newUrl);
            const json = await response.json();
            setSingleCrit(json);
            setName(json.name);
        }
        makeApiCall();
    },[])


        if (name) {
            let firstNameInObj = Object.values(name)
            let splitName = firstNameInObj[0].split("")
            let firstLetter = splitName[0].toUpperCase()
            splitName[0] = firstLetter
            splitName = splitName.join("")

 
    return (
            <div className='singleCritContainer'>
                <h1>{splitName}</h1>
                <img src={singleCrit.image_uri} alt={singleCrit.name} />
                <div className='imgBlurb'>
                    <img src='https://i.imgur.com/IwwgqIP.png' alt='Blathers' />
                    <p>{singleCrit['museum-phrase']}</p>
                </div>
                <p><strong>Where is it? </strong> {singleCrit.availability.location}</p>
                <p><strong>Price: </strong>{singleCrit.price} Bells (Flick's price: {singleCrit['price-flick']} Bells)</p>
                <p><strong>Rarity: </strong>{singleCrit.availability.rarity}</p> 
                <a href={wikiURL}>Learn even more!</a> 
            </div>
    )
} else {return null}

}


export default SingleCrit