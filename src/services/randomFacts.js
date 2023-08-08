export const getRandomFacts = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact")
    if(!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    const { fact } = data
    return fact
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}