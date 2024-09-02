import { useEffect } from 'react'
import { useState } from 'react'
import Articles from '../Articles/Articles'
import { fetchArticles } from '../../articles-api'
import SearchForm from '../SearchForm/SearchForm'

function App() {

  const [articles, setArticles] = useState([])

 //патрн  так делать всегда 
  useEffect(() => {
    async function getAtricles() {
      const data = await fetchArticles();
      setArticles(data);
    }

    getAtricles();
  },[])
  return (
    <>
      <SearchForm />
      {articles.length > 0 && <Articles items={articles}></Articles>} 
    </>
  )
}

export default App
