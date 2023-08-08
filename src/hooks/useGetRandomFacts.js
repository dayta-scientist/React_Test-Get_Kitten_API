import { useEffect, useState } from "react"
import { getRandomFacts } from "../services/randomFacts"

export const useGetRandomFacts = () => {
  const [fact, setFact] = useState([])
  

  const fetchRandom = async () => {
    const fetching = await getRandomFacts()
    setFact(fetching)
  }

  useEffect(() => {
    fetchRandom()
  }, [])
  return({ fact, fetchRandom })
}