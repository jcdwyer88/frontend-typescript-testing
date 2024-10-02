import {useEffect} from "react";
import {fetchCars} from "./car-service.ts";

const CarPage = () => {
  useEffect(() => {
    fetchCars()
  }, []);

  return (
    <div>
      <h2>Cars</h2>
    </div>
  );
};

export default CarPage;