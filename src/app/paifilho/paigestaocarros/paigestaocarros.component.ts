import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/shared/carro';
import { carros } from 'src/app/shared/carros';

@Component({
  selector: 'app-paigestaocarros',
  templateUrl: './paigestaocarros.component.html',
  styleUrls: ['./paigestaocarros.component.css']
})
export class PaigestaocarrosComponent implements OnInit {
  listaCarrosOriginal: Carro[] = carros;
  lista: Carro[] = [];
  searchType: string = "carros";
  carroAltera!: Carro;
  pesquisaCorrente: string = "";
  filtroCorrente: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.resetList();
  }

  resetList() {
    this.lista = this.listaCarrosOriginal.slice(0);
  }

  elCarro(id: number) {
    this.listaCarrosOriginal = this.listaCarrosOriginal.filter(objecto => objecto.id !== id);

    this.resetList();
  }

  cleanPesquisa() {
    // this.resetList();
    this.pesquisaCorrente = "";
    this.filteredSearch();
  }

  efectuaPesquisa(valorPesquisa: string) {

    this.pesquisaCorrente = valorPesquisa;
    this.filteredSearch();
    // this.lista = this.listaCarrosOriginal.filter(objecto => 
    //     objecto.modelo.toUpperCase().includes(valorPesquisa.toUpperCase()) || objecto.marca.toUpperCase().includes(valorPesquisa.toUpperCase()));
  }

  filtraCarro(filtro: string) {

    // console.log(filtro);
    this.filtroCorrente = filtro;
    this.filteredSearch();

    // switch (filtro) {
    //   case 'N':
    //     this.lista = this.listaCarrosOriginal
    //       .filter(objecto => objecto.disponivel === false);
    //     break;

    //   case 'S':
    //     this.lista = this.listaCarrosOriginal
    //       .filter(objecto => objecto.disponivel === true);
    //     break;

    //   case 'T':        
    //     this.resetList();
    //     break;

    //   default:
    //     break;
    // }
  }

  filteredSearch() {
    this.lista = this.listaCarrosOriginal.filter(objecto =>
      objecto.modelo.toUpperCase().includes(this.pesquisaCorrente.toUpperCase()) ||
      objecto.marca.toUpperCase().includes(this.pesquisaCorrente.toUpperCase()));

    switch (this.filtroCorrente) {
      case 'N':
        this.lista = this.lista
          .filter(objecto => objecto.disponivel === false);
        break;

      case 'S':
        this.lista = this.lista
          .filter(objecto => objecto.disponivel === true);
        break;

      // case 'T':        
      //   this.resetList();
      //   break;

    }
  }

  insertCar(carro: Carro) {
    // console.log(carro);

    // let maximo : number = 0;
    // for(carro of this.listaCarrosOriginal){
    //   maximo = carro.id! > maximo ? carro.id! : maximo;
    // }
    // this.listaCarrosOriginal.push({...carro, id: ++maximo});

    // map traz sempre o mesmo nr de elementos do array!
    carro.id = Math.max(...this.listaCarrosOriginal.map(carro => carro.id!)) + 1;
    this.listaCarrosOriginal.push(carro);
    this.resetList();
  }

  altCarro(id: number) {
    // console.log(id);
    this.carroAltera = this.listaCarrosOriginal.filter(objecto => objecto.id === id)[0];
  }

  updateCar(carro: Carro) {
    let posicao = this.listaCarrosOriginal
      .findIndex(registo => registo.id === carro.id);
    this.listaCarrosOriginal[posicao] = carro;
    this.resetList();
    this.resetList();
  }

  mostraInfoCarro(id: number) {
    this.router.navigateByUrl(`/carro/${id}`);
  }

}
