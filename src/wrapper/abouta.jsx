import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AboutaItem from "./about_item";
import HostItem from "./host_item";
import Footer from "../footer/footer"
import * as S from "./abouta_s";

export const Abouta = () => {
  const params = useParams();
  const [about, setAbout] = useState("");
  const [visible, setVisible] = useState(false);
  const [square, setSquare] = useState("");

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
        setSquare(
          <HostItem
            name={data.host_name}
            number={data.host_phone}
            adress={data.host_location}
          ></HostItem>
        );
      });
  }, []);

  return (
    <S.content>
      <S.header>
      <Link to={"/"}>
        <S.vector>
          ⬅
          </S.vector>
        </Link>
        <h1>SKYRENT</h1>
          {/* <img src="/img/Vector.svg" alt="ikkk" /> */}
      </S.header>

      {about}
      {visible ? (
        <S.ramochka>{square}</S.ramochka>
      ) : (
        <S.infoButton
          onClick={() => {
            setVisible(true);
          }}
        >
          Показать контактную информацию
        </S.infoButton>
      )}
      <Footer/>
    </S.content>
  );
};
