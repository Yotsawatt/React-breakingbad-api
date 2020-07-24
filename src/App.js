import React , {useEffect , useState} from 'react'
import Header from './component/ui/Header'
import CharactorGrid from './component/charactor/charactorGrid'
import './App.css'
import Axios from 'axios'

export default function App() {

  const [item, setItem] = useState([])

  useEffect(() => {
    
    const fetchItem = async () => {
      const result = await Axios.get(`https://www.breakingbadapi.com/api/characters`)
      // console.log(result.data)
      setItem(result.data)
    }

    fetchItem()
    
  }, [])

  return (
    <div className="container">
      <Header />
      <CharactorGrid item={item} />
    </div>
  )
}
