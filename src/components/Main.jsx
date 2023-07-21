import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.scss';

const Main = () => {
  const apiKey = '98d3226fcd0e4709ae2f19c3f5376a85';
//   const url = "https://newsapi.org/v2/top-headlines?country=in";
  // Main.jsx

const url = "https://https://vercel.com/rayyandevzone/news-app/api/NewsProxy";


  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      console.log(response.data); // Log the response to the console
      setNewsData(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='main'>
      <div className="topics">
        <p className='tpc'>Home</p>
        <p className='tpc'>Business</p>
        <p className='tpc'>Entertainment</p>
        <p className='tpc'>Health</p>
        <p className='tpc'>Sports</p>
        <p className='tpc'>Technology</p>
        <p className='tpc'>Science</p>
      </div>

      <div className="news-container">
        {newsData.map((newsItem) => (
          <div key={newsItem.title} className="news-card">
            <img src={newsItem.urlToImage} alt={newsItem.title} />
            <h2>{newsItem.title}</h2>
            <p>{newsItem.description}</p>
            <a href={newsItem.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
