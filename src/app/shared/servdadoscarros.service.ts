import { Injectable } from '@angular/core';
import { Carro } from 'src/app/shared/carro';
import { carros } from 'src/app/shared/carros';

@Injectable({
  providedIn: 'root'
})
export class ServdadoscarrosService {
  // Source of truth

  carList: Carro[] = carros;

  constructor() { }

  // CRUD
  getAllCars() {
    return this.carList;
  }

  getCarById(id: number) {
    return this.carList.filter(car => car.id === id)[0];
  }

  insertCar(carro: Carro) {
    carro.id = Math.max(...this.carList.map(carro => carro.id!)) + 1;
    this.carList.push(carro);
  }

}
