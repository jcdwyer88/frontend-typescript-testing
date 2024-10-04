import {Car} from "./types.ts";
import axios from "axios";

export const fetchCars = (): Promise<Car[]> => {
    return axios.get('/api/car').then(response => response.data);
}