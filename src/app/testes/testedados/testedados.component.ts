import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/shared/carro';
// import { carros } from "../../shared/carros";
import { carros } from "src/app/shared/carros";

@Component({
  selector: 'app-testedados',
  templateUrl: './testedados.component.html',
  styleUrls: ['./testedados.component.css']
})
export class TestedadosComponent implements OnInit {
  listaCarrosOriginal : Carro[] = carros;
  // listaCarros : Carro[] = carros;
  // listaCarros! : Carro[];
  listaCarros : Carro[] = [];


  constructor() { 
    // console.log(carros);
    // console.log(this.listaCarros);
    this.resetList();
  }

  ngOnInit(): void {
  }

  resetList() {
    // this.listaCarros=[...this.listaCarrosOriginal];
    this.listaCarros=this.listaCarrosOriginal.slice(0);
  }

  processaPesquisa(valorPesquisa : string) {
    // console.log(valorPesquisa);
    this.listaCarros=this.listaCarrosOriginal.filter(objecto => objecto.modelo.toUpperCase().includes(valorPesquisa.toUpperCase()) || objecto.marca.toUpperCase().includes(valorPesquisa.toUpperCase()))
  }
  limpaPesquisa() {
    this.resetList();
  }
  removeItem(id : number){
    console.log(id);
    // let posicao : number = this.listaCarrosOriginal.findIndex(objeto=>objeto.id === id);
    // this.listaCarrosOriginal.splice(posicao,1);
    
    // this.listaCarrosOriginal = this.listaCarrosOriginal.filter(objecto => objecto.id !== id);
    
    // let tempArray = [];
    // for (let index = 0; index < this.listaCarrosOriginal.length; index++) {
    //   if (this.listaCarrosOriginal[index].id !== id){
    //     tempArray.push(this.listaCarrosOriginal[index]);
    //   }      
    // }
    // this.listaCarrosOriginal=[...tempArray];
        
    let tempArray = [];
    for (let carro of this.listaCarrosOriginal) {
      if(carro.id !== id){
        tempArray.push(carro);
      }
    }
    this.listaCarrosOriginal=[...tempArray];

    this.resetList();
  }

}
