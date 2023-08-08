import './App.css'
import { useGetRandomFacts } from './hooks/useGetRandomFacts'


function App() {
 const {fact, fetchRandom } = useGetRandomFacts()
  return (
    <>
      <h1>Kitten App</h1>
      {fact && <p>{fact}</p>}
    </> 
  )
}

export default App