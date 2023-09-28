import React, { useRef } from "react";
import { useCars } from "../hooks/useCars";
import Card from "./Card";
import Swiper from "swiper";
import "swiper/css";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();
  const itemCar = useRef(null);
  return (
    <>
      <div className="flex gap-3 swiper">
        <div className="swiper-wrapper">
          {cars.map((car) => (
            <div className="swiper-slide">9
              <Card key={car.id} car={car} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
