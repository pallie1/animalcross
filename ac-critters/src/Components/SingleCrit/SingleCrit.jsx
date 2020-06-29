import React from 'react';
import './singleCrit.scss';


const SingleCrit = ({ clickData }) => {

    // if (clickData) {

    if (clickData[0]) {
        let name = clickData[0].name;
        let firstNameInObj = Object.values(name)
        let splitName = firstNameInObj[0].split("")
        let firstLetter = splitName[0].toUpperCase()
        splitName[0] = firstLetter
        splitName = splitName.join("")

        
        console.log('Bug name - ', splitName)
       
        
        
        return (
            <div className='singleCritContainer'>
                {/* <h1>Working</h1> */}
                <h1>{splitName}</h1>
                <img src={clickData[0].image_uri} alt={clickData[0].name} />
                <p>{clickData[0]['museum-phrase']}</p>
                <p>Where is it? {clickData[0].availability.location}</p>
                <p>Price: {clickData[0].price} Bells</p>
                <p>Flick's price: {clickData[0]['price-flick']} Bells</p>
                <p>Rarity: {clickData[0].availability.rarity}</p>


            </div>
        )
    } else {return null}
   

   
}

export default SingleCrit