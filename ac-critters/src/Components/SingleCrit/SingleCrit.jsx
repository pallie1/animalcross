import React from 'react'


const SingleCrit = ({ clickData }) => {

    if (clickData[0]) {
        let name = clickData[0].name;
        let firstNameInObj = Object.values(name)
        let splitName = firstNameInObj[0].split("")
        let firstLetter = splitName[0].toUpperCase()
        splitName[0] = firstLetter
        splitName = splitName.join("")

        
        console.log('Bug name - ', splitName)
       
        
        
        return (
            <>
                <h1>{splitName}</h1>
                <img src={clickData[0].image_uri} alt={clickData[0].name} />
                {/* <p>{clickData.museum-phrase}</p> */}
                <p>Price: {clickData[0].price}</p>
                {/*  <p>Flick's price: {clickData[0].price-flick}</p> */}
                <p>Rarity: {clickData[0].availability.rarity}</p>


            </>
        )
    } else {return null}
   

    // console.log('clickNameKey - ', clickNameKey)
    
    // return (
    //     <>
    //         {/* <h1>{clickData[0].name}</h1> */}
    //         {/* <img src={clickData.image_uri} alt={clickData.name} /> */}
    //         {/* <p>{clickData.museum-phrase}</p> */}
    //         {/* // <h3>{clickData.</h3> */}
    //     </>
    // ) 
   
}

export default SingleCrit