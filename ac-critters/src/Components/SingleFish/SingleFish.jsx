import React, { useEffect, useState } from 'react';



const SingleFish = props => {

    const [singleFish, setSingleFish] = useState("");
    const[name, setName] = useState("")
    // console.log('location props - ', props.location.pathname)

    
    let path = props.location.pathname;
        console.log('location props - ', props.location)



    // if (props.location) {
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



    console.log('splitName - ', splitName)
  

 
    return (
            <div className='singleCritContainer'>
                <h1>{splitName}</h1>
                <img src={singleFish.image_uri} alt={singleFish.name} />
                <div className='imgBlurb'>
                    <img src='https://i.imgur.com/IwwgqIP.png' alt='Blathers' />
                    <p>{singleFish['museum-phrase']}</p>
                </div>
                {/* <p>Where is it? {singleCrit.availability.location}</p> */}
                <p>Price: {singleFish.price} Bells</p>
                {/* <p>Flick's price: {singleFish['price-flick']} Bells</p> */}
{/* //                 <p>Rarity: {clickData[0].availability.rarity}</p>  */} 


            </div>
    )} else {return null}

}


export default SingleFish


// import React from 'react';
// import './singleCrit.scss';


// const SingleCrit = ({ clickData }) => {

//     if (clickData) {

//     // if (clickData[0]) {
//     //     let name = clickData[0].name;
//     //     let firstNameInObj = Object.values(name)
//     //     let splitName = firstNameInObj[0].split("")
//     //     let firstLetter = splitName[0].toUpperCase()
//     //     splitName[0] = firstLetter
//     //     splitName = splitName.join("")

        
//     //     console.log('Bug name - ', splitName)
       
        
        
//         return (
//             <div className='singleCritContainer'>
//                 <h1>Working</h1>
//                 {/* <h1>{splitName}</h1>
//                 <img src={clickData[0].image_uri} alt={clickData[0].name} />
//                 <p>{clickData[0]['museum-phrase']}</p>
//                 <p>Where is it? {clickData[0].availability.location}</p>
//                 <p>Price: {clickData[0].price} Bells</p>
//                 <p>Flick's price: {clickData[0]['price-flick']} Bells</p>
//                 <p>Rarity: {clickData[0].availability.rarity}</p> */}


//             </div>
//         )
//     } else {return null}
   

   
// }

// export default SingleCrit