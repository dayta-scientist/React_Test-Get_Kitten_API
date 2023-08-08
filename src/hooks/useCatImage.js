import { useState, useEffect } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export const useCatImage = ({ fact }) => {
  const [image, setImage] = useState()

  const fetchImage = async () => {
    const firstWord = fact.split(' ', 1).join(' ')
    try {
      const response = await fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      if(!response.ok) {
        throw new Error("Network response was not ok")
      }
      const { url } = await response.json()
      setImage(url)

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    }
    
    }
    useEffect(() => {
      fetchImage()
    }, [fact])

    return { image: `${CAT_PREFIX_IMAGE_URL}${image}` }
}

  

  
  

  
