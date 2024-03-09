import React, { useEffect, useState } from "react";
import "./News.css";

export default function News() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    // fetch(
    //   "https://api.worldnewsapi.com/search-news?text=esports&language=en&api-key=512fc418cb534e988a1ffd000ba36fc9"
    // )
    //   .then((data) => data.json())
    //   .then((data) => setNews(data))
    //   .catch((error) => console.log(error));
  }, []);
  console.log(news);
  const randomNewsIndex = news
    ? Math.floor(Math.random() * news.news.length)
    : 0;
  return (
    <div className="news-main">
      <div>
        {news ? <img src={news.news[randomNewsIndex].image} /> : <>Loading</>}
        <h1>{news ? news.news[0].title : "Loading"}</h1>
      </div>
      <p className="content">
        {news ? news.news[randomNewsIndex].text.slice(0, 365) : "Loading"}...{" "}
        <strong>Read More</strong>
      </p>
    </div>
  );
}
