import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filhopesquisacarros',
  templateUrl: './filhopesquisacarros.component.html',
  styleUrls: ['./filhopesquisacarros.component.css']
})
export class FilhopesquisacarrosComponent implements OnInit {
  @Input() tipoPesquisa :string = "";
  @Output() pesquisa : EventEmitter<string> = new EventEmitter();
  @Output() cleanSearchField : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  processaPesquisa(valorPesquisa : string){
    this.pesquisa.emit(valorPesquisa);
  }

  limpaPesquisa(){
    this.cleanSearchField.emit();
  }

}
