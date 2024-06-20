// src/MarvelCharacters.js
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-dom'



const NewsApi = () => {
  const [newsArticle, setArticles] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=24ac05cd8b5a42629d17b3e5281bab98')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  if (!newsArticle) return <p>Loading...</p>;

  return (
    <div>
      <h1>{newsArticle.name}</h1>
      <p> Article: {newsArticle.article}</p>
      <img src={newsArticle.url} alt={newsArticle.name} />
    </div>
  );
};

export default NewsApi;


