// import {useEffect, useState} from "react";
// import {fetchCars} from "./car-service.ts";
// import {Car} from "../types.ts";
// import CarCard from "./car-card.tsx";
import CarForm from "./car-form.tsx";

const CarPage = () => {
  // const [cars, setCars] = useState<Car[]>([])

  // useEffect(() => {
  //   fetchCars().then(setCars)
  // }, []);

  return (
    <div>
        <CarForm/>
      <h2>Cars</h2>
      {/*<ul>*/}
      {/*  {cars.map(car => (<CarCard key={car.id} car={car}/>))}*/}
      {/*</ul>*/}
    </div>
  );
};

export default CarPage;