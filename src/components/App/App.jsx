import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Articles from '../Articles/Articles'

function App() {

  const [articles, setArticles] = useState([])

 //патрн  так делать всегда 
  useEffect(() => {
    async function getAtricles() {
      const response = await axios.get(
        "http://hn.algolia.com/api/v1/search?query=react"
      );
      setArticles(response.data.hits);
    }

    getAtricles();
  },[])
  return (
    <>
      {articles.length > 0 && <Articles items={articles}></Articles>} 
    </>
  )
}

export default App
