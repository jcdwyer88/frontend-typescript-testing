import {Car} from "./types.ts";

type CarCardProps = {
    car:Car
}

const CarCard = ({car}:CarCardProps) => {
    return (
        <div>
            <h2>{car.make}</h2>
            {car.model}
        </div>
    );
};

export default CarCard;