// src/MarvelCharacters.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'



const NewsApi = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=24ac05cd8b5a42629d17b3e5281bab98')
      .then(response => {
        setArticles(response.data.articles)
        setLoading(false)
      }) 
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <ol id='articles'>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.date}</p>
          </li>
        ))}
      </ol>
    );
  };

export default NewsApi;


