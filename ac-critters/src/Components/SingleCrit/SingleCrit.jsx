import React, { useEffect, useState } from 'react';
// import months from '../monthData/monthData';
import './singleCrit.scss';


const SingleCrit = props => {

    const [singleCrit, setSingleCrit] = useState("");
    const [name, setName] = useState("")
    // const [monthAr, setMonthAr] = useState("");
   
    // console.log('name - ', name['name-USen'])

    
    let path = props.location.pathname;
  

    useEffect(() => {
        let newUrl = `https://acnhapi.com/v1/bugs${path}`;
        const makeApiCall = async () => {
            const response = await fetch(newUrl);
            const json = await response.json();
            setSingleCrit(json);
            setName(json.name);
            // setMonthAr(json.availability['month-array-northern']);
        }
        makeApiCall();
    },[])


        if (name) {
            let firstNameInObj = Object.values(name)
            let splitName = firstNameInObj[0].split("")
            let firstLetter = splitName[0].toUpperCase()
            splitName[0] = firstLetter
            splitName = splitName.join("")

        // for (let i=0; i<monthAr.length; i++) {
        //     let keyss = monthAr[i];
        //     let temp = []
        //     for (const keyss of Object.keys(months)) {
        //     } console.log(months[keyss])
        //     // temp.push(months[keyss])
        //     // return(temp)
        // } return (<h1>GOOGB</h1>)
 
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
            </div>
    )
} else {return null}

}


export default SingleCrit