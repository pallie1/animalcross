import React, { useEffect, useState } from 'react';



const SingleFish = props => {

    const [singleFish, setSingleFish] = useState("");
    const[name, setName] = useState("")
    
    let path = props.location.pathname;
        // console.log('location props - ', props.location)

    useEffect(() => {
        let newUrl = `https://acnhapi.com/v1/fish${path}`;
        const makeApiCall = async () => {
            const response = await fetch(newUrl);
            const json = await response.json();
            setSingleFish(json);
            setName(json.name)
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
                <img src={singleFish.image_uri} alt={singleFish.name} />
                <div className='imgBlurb'>
                    <img src='https://i.imgur.com/IwwgqIP.png' alt='Blathers' />
                    <p>{singleFish['museum-phrase']}</p>
                </div>
                <p><strong>Where is it? </strong>{singleFish.availability.location}</p>
                <p><strong>Price: </strong>{singleFish.price} Bells (CJ's price: {singleFish['price-cj']} Bells)</p>
                <p><strong>Rarity: </strong>{singleFish.availability.rarity}</p>  


            </div>
    )} else {return null}

}


export default SingleFish
   
   