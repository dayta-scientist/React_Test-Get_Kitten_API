import './App.css'
import { useGetRandomFacts } from './hooks/useGetRandomFacts'
import { useCatImage } from './hooks/useCatImage'


function App() {
 const {fact, fetchRandom } = useGetRandomFacts()
 const { image } = useCatImage({ fact })

 const handleClick = async () => {
  fetchRandom()
}

  return (
    <>
      <h1>Kitten App</h1>

      <button onClick={handleClick}>Get new fact</button>
      
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt={`Image extracted using the first word for ${fact}`} />}
    </> 
  )
}

export default App