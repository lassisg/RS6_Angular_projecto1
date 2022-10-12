import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carro } from 'src/app/shared/carro';

@Component({
  selector: 'app-filhotabelacarros',
  templateUrl: './filhotabelacarros.component.html',
  styleUrls: ['./filhotabelacarros.component.css']
})
export class FilhotabelacarrosComponent implements OnInit {
  @Input() listaCarros: Carro[] = [];
  @Output() elimina: EventEmitter<number> = new EventEmitter();
  @Output() altera: EventEmitter<number> = new EventEmitter();
  @Output() info: EventEmitter<number> = new EventEmitter();
  sortAsc: boolean = false;
  currentSort: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  eliminaCarro(id: number, event: any) {
    event.stopPropagation();
    console.log(id);

    // Error, devido ao tipo de dado
    // let nome : string = "Pedro";
    // this.elimina.emit(nome);

    this.elimina.emit(id); // id é o payload
  }

  alteraCarro(id: number, event: any) {
    event.stopPropagation();
    this.altera.emit(id); // id é o payload
  }

  ordenaPor(coluna: string) {

    if (coluna === this.currentSort || this.currentSort === '') {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
    }

    this.currentSort = coluna;

    switch (this.currentSort) {
      case 'marca':
        if (this.sortAsc) {
          this.listaCarros.sort((a, b) => (a.marca.toLowerCase() > b.marca.toLowerCase()) ? 1 : -1);
        } else {
          this.listaCarros.sort((a, b) => (a.marca.toLowerCase() > b.marca.toLowerCase()) ? -1 : 1);
        }
        break;

      case 'modelo':
        if (this.sortAsc) {
          this.listaCarros.sort((a, b) => (a.modelo.toLowerCase() > b.modelo.toLowerCase()) ? 1 : -1);
        } else {
          this.listaCarros.sort((a, b) => (a.modelo.toLowerCase() > b.modelo.toLowerCase()) ? -1 : 1);
        }
        break;

      case 'ano':
        if (this.sortAsc) {
          this.listaCarros.sort((a, b) => (a.ano - b.ano));
        } else {
          this.listaCarros.sort((a, b) => (b.ano - a.ano));
        }
        break;

      case 'disponivel':
        if (this.sortAsc) {
          this.listaCarros.sort((a, b) => (a === b) ? 0 : a ? -1 : 1);
        } else {
          this.listaCarros.sort((a, b) => (a === b) ? 0 : b ? -1 : 1);
        }
        break;

      default:
        break;
    }

  }

  showInfoCarro(id: number, event: any) {
    event.stopPropagation();
    this.info.emit(id);
  }

}
