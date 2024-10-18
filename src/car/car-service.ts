import axios from "axios";
import {Car} from "../types.ts";

export function fetchCars(): Promise<Car[]>{
  return axios.get('/api/car').then(r => r.data)
}

export function saveCar(data: Partial<Car>): Promise<Car> {
  try{
    return axios.post('/api/car', data)
  }
  catch(e) {
    return Promise.reject(e)
  }
}