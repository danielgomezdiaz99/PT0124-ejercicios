import { dataRicky } from "../../data/ricky.data";
import { CardCharacter } from "../CardCharacter/CardCharacter";
import "./Gallery.css";
import { useState, useEffect } from "react";

export const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters = await dataRicky();
        setData(characters);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="container-gallery">
        {data.map((el) => {
          if (el.status !== "Dead") {
            return (
              <CardCharacter
                image={el.image}
                name={el.name}
                origin={el.origin.name}
                status={el.status}
                key={el.id}
              />
            );
          }
          return null;
        })}
    </div>
  );
};
