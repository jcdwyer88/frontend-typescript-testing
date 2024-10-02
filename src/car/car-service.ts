import axios from "axios";
import {Car} from "../types.ts";

export function fetchCars(): Promise<Car[]>{
  return axios.get('/api/car').then(r => r.data)
}