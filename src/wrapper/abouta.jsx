import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AboutaItem from "./about_item";

export const Abouta = () => {
  const params = useParams();
  const [about, setAbout] = useState("");

  useEffect(() => {
    fetch(`https://pythonistic.pythonanywhere.com/places/${params.pk}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAbout(
        
            <AboutaItem
              country={data.country}
              city={data.city}
              price={data.price}
              description={data.description}
              picture_url={data.picture_url}
              features_on={data.features_on}
              features_off={data.features_off}
            ></AboutaItem>
          
        );
      });
  }, []);

  return (
    <div>
      <h1>SKYRENT</h1>
      {about}
      <button>Показать контактную информацию</button>
    </div>
  );
};
