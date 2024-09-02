import { useEffect } from 'react'
import { useState } from 'react'
import Articles from '../Articles/Articles'
import SearchForm from '../SearchForm/SearchForm'
import { fetchArticles } from '../../articles-api'

function App() {

  const [articles, setArticles] = useState([]);

  const handleSearch = async (newQueary) => {
     const data = await fetchArticles(newQueary);
     setArticles(data);
  };

  return (
    <>
      <SearchForm onSearch={handleSearch}/>
      {articles.length > 0 && <Articles items={articles}></Articles>} 
    </>
  )
}

export default App


  // useEffect(() => {
  //   async function getAtricles() {
  //     const data = await fetchArticles();
  //     setArticles(data);
  //   }

  //   getAtricles();
  // },[])