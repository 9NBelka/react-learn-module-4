import axios from 'axios'
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

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
      {articles.length > 0 && (
        <ul>
          {articles.map((articles) => (
            <li key={articles.objectID}>
              <a href={articles.url}>{articles.title}</a>
              <h3>{articles.author}</h3>
            </li>
          ))}
        </ul>)}
    </>
  )
}

export default App
