import { Car } from "../types/car.interface";

interface CardProps {
  car: Car;
}

export default function Card({ car }: CardProps) {
  return (
    <div className="flex flex-col w-64 gap-x-1">
      <h3 className="font-medium">{car.bodyType}</h3>
      <div className="flex pb-1.5">
        <h2 className="pr-2 font-bold">{car.modelName}</h2>
        <h3>{car.modelType}</h3>
      </div>
      <img src={car.imageUrl} alt="" />
    </div>
  );
}
