import {getFitnessNews} from "../../data/news.data"
import { Notice } from "../Notice/Notice";
import "./Gallery.css";
import { useState, useEffect } from "react";

export const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const news = await getFitnessNews();
        setData(news);
        console.log(news)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className="gallery">
      <div className="cabecera-galery">
        <h2>Principales Noticias</h2>
      </div>
      <div id="container-gallery">
          {data.map((el) => {
              return (
                <Notice
                author={el.author}
                title={el.title}
                url={el.url}
                urlToImage={el.urlToImage}
                  key={el.title}
                />
              );
            return null;
          })}
      </div>
    </div>
    </>
  );
};
