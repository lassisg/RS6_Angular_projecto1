import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filhofiltrocarros',
  templateUrl: './filhofiltrocarros.component.html',
  styleUrls: ['./filhofiltrocarros.component.css']
})
export class FilhofiltrocarrosComponent implements OnInit {

  @Output() tipoFiltro : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  filtra(tipo : string){
    // console.log(tipo);
    this.tipoFiltro.emit(tipo);
  }

}
