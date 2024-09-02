import { useEffect } from 'react'
import { useState } from 'react'
import Articles from '../Articles/Articles'
import SearchForm from '../SearchForm/SearchForm'
import { fetchArticles } from '../../articles-api'

function App() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (newQueary) => {
    try{
      setIsLoading(true);
      setArticles([]);
      const data = await fetchArticles(newQueary);
      setArticles(data);
      setIsLoading(false);
    } catch (error) {}
     
  };

  return (
    <>
      <SearchForm onSearch={handleSearch}/>
      {isLoading && <b>Loading articles...</b>}
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