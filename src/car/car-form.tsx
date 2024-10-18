import {FormEvent, useState} from "react";
import {saveCar} from "./car-service.ts";
import {Car} from "../types.ts";

const CarForm = () => {
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')
    const [seats, setSeats] = useState(0)
    const [type, setType] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newCar : Partial<Car> = {
            make: make,
            model: model,
            color: color,
            seats: seats,
            type: type,
        }
        saveCar(newCar)
    };

    return (
        <div>
            <h3>New Car Submission</h3>
            <p>This is where you submit your new car data</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="make">
                    Make
                </label>
                <input type="text" id='make' placeholder='Enter vehicle make...' value={make} onChange={(e => {
                    setMake(e.target.value)
                })}/><br/>
                <label htmlFor="model">
                    Model
                </label>
                <input type="text" id='model' placeholder='Enter vehicle model...' value={model} onChange={(e => {
                    setModel(e.target.value)
                })}/><br/>
                <label htmlFor="color">
                    Color
                </label>
                <input type="text" id='color' placeholder='Enter vehicle color...' value={color} onChange={(e => {
                    setColor(e.target.value)
                })}/><br/>
                <label htmlFor="seats">
                    #Seats
                </label>
                <input type="number" id='seats' placeholder='Enter vehicle seats...' min={0} max={10} value={seats} onChange={(e => {
                    setSeats(parseInt(e.target.value))
                })}/><br/>
                <label htmlFor="type">
                    Car Type
                </label>
                <input type="text" id='type' placeholder='Enter vehicle type...' value={type} onChange={(e => {
                    setType(e.target.value)
                })}/><br/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CarForm;