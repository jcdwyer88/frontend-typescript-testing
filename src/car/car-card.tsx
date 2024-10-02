type Car = { make: string; model: string; id: number };

type CarCardProps = {
  car: Car,
}

const CarCard = ({car}: CarCardProps) => {
  return (
    <div role='listitem'>
      <h3>{car.make}</h3>
      <span>{car.model}</span>
    </div>
  );
};

export default CarCard;