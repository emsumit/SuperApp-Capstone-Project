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
  return <div className="news-main">News</div>;
}
