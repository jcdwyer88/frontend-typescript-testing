import {useEffect, useState} from "react";
import {fetchCars} from "./CarClient.ts";
import {Car} from "./types.ts";
import CarCard from "./CarCard.tsx";

const CarPage = () => {

    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        fetchCars().then((response: Car[]) => setCars(response));
    }, [])

    return (
        <div>
            <h1>Cars</h1>
            {cars.map((car) => <CarCard key={car.model} car={car} />)}
        </div>
    );
};

export default CarPage;