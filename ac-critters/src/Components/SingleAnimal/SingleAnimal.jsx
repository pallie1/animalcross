import React, { useEffect, useState } from "react"
import "./singleCrit.scss"

const SingleAnimal = (props) => {
  const [singleAnimal, setSingleAnimal] = useState("")
  const [typeOfAnimal, setTypeOfAnimal] = useState("")

  let path = props.location.pathname
  let wikiURL = `https://animalcrossing.fandom.com/wiki${path}`

  useEffect(() => {
    let tryCritters = `https://acnhapi.com/v1/bugs${path}`
    let tryFish = `https://acnhapi.com/v1/fish${path}`
    const makeApiCallCritters = async () => {
      const response = await fetch(tryCritters)
      const json = await response.json()
      setSingleAnimal(json)
      setTypeOfAnimal('critter')
    };
    const makeApiCallFish = async () => {
      const response = await fetch(tryFish)
      const json = await response.json()
      setSingleAnimal(json)
      setTypeOfAnimal('fish')
    };
    makeApiCallCritters()
    makeApiCallFish()
  }, [])

  if (singleAnimal.name) {

    let animalName = Object.values(singleAnimal.name)[0].split(' ').map(word => {
      let capitalWords = word[0].toUpperCase() + word.substring(1)
      return capitalWords
    }).join(' ')

    let collectorsPrice = 0
    let collector = ''
    if (typeOfAnimal === 'critter') {
      collectorsPrice = singleAnimal["price-flick"]
      collector = 'Flick'
    } else {
      collectorsPrice = singleAnimal['price-cj']
      collector = 'CJ'
    }

    return (
      <div className="singleCritContainer">
        <h1>{animalName}</h1>
        <img src={singleAnimal.image_uri} alt={singleAnimal.name} />
        <div className="imgBlurb">
          <img src="https://i.imgur.com/IwwgqIP.png" alt="Blathers" />
          <p>{singleAnimal["museum-phrase"]}</p>
        </div>
        <p>
          <strong>Where is it? </strong> {singleAnimal.availability.location}
        </p>
        <p>
          <strong>Price: </strong>
          {singleAnimal.price} Bells ({collector}'s price: {collectorsPrice} Bells)
        </p>
        <p>
          <strong>Rarity: </strong>
          {singleAnimal.availability.rarity}
        </p>
        <a href={wikiURL}>Learn even more!</a>
      </div>
    )
  } else {
    return null
  }
}

export default SingleAnimal