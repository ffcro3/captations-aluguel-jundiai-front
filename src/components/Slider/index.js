import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel";

import api from "../../services/api";

import { SliderContainer } from "./styles";

export default function Slider() {
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadSlider() {
      const token = await localStorage.getItem("@userIdentification");
      const response = await api
        .get(`/captations/${code}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .catch(function(error) {
          console.log(error.response.data);
        });

      if (response) {
        await setImages(response.data.images);
      }

      if (!response) {
        setImages({
          error: "Property not found"
        });
      }
    }
    loadSlider();
  }, []);

  return (
    <>
      <SliderContainer>
        <Carousel>
          {images.map((images, index) => (
            <img
              key={index}
              src={images}
              alt=""
              style={{ objectFit: "contain", height: "400px" }}
            />
          ))}
        </Carousel>
      </SliderContainer>
    </>
  );
}
