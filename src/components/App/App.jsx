import { useEffect } from 'react'
import { useState } from 'react'
import Articles from '../Articles/Articles'
import SearchForm from '../SearchForm/SearchForm'
import { fetchArticles } from '../../articles-api'
import UseMemoExample from '../UseMemoExample/UseMemoExample'

function App() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  //этот эффект реагирует на изменения query или page
  // при клике на кнопку мы меняем page
  // при отправке формы мы изменяем query
  useEffect(() => {
    if (query === ""){
      return;
    }

    async function getData() {
      try {
      setIsLoading(true)
      setError(false);
      const data = await fetchArticles(query, page);
      setArticles(prevArticles => {
        return [...prevArticles, ...data];
      });
    } catch (eror) {
       setError(true)
    } finally{
      setIsLoading(false);
    }
  }
    getData();
  }, [page, query]);

  //анонимная функцция не может быть асинхронной поэтому пишем async function getData()

  const handleSearch = async (newQueary) => {
      setQuery(newQueary);
      setPage(1);
      setArticles([]);
      // setIsLoading(true);
      // setError(false)
      // setArticles([]);
  }

  const handleLoadMore = () => {
    setPage(page +1);
  };
 
  return (
    <>
      <SearchForm onSearch={handleSearch}/>
      {error && <b>Oops! Error! Reload!</b>}
      {articles.length > 0 && <Articles items={articles}></Articles>} 
      {articles.length > 0 && !isLoading && <button onClick={handleLoadMore}>Load more</button>}
      {isLoading && <p>Loading articles...</p>}

      <UseMemoExample />
    </>
  )
};

export default App


  // useEffect(() => {
  //   async function getAtricles() {
  //     const data = await fetchArticles();
  //     setArticles(data);
  //   }

  //   getAtricles();
  // },[])