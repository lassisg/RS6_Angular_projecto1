import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  title : string = "Primavera"; // Typescript
  localidade : string;
  // formadorMoraEmErmesinde : boolean = true;
  formadorMoraEmErmesinde : string = "Sim";
  imagem : string = "landscape.jpg";
  imagem2 : string = "assets/landscape.jpg";
  classe : string = "";
  mostraCollapse : boolean = true;

  constructor() { 

    // document.getElementById("texto")!.textContent = this.title;
    // this.title = "Primavera Software";
    this.title = this.mudaNome();
    // this.title = this.mudaNome().toUpperCase();
    // this.title = 90; // erro
    this.localidade = "Ermesinde";
  }

  ngOnInit(): void {
  }

  mudaNome(){
    return "Pedro remoaldo";
  }

  moraErmesinde(){
    if(this.localidade == "Ermesinde"){
      return "Sim";
    }else{
      return "Não;"
    }
  }

  mudaImagem(){
    // console.log("Estou aqui");
    this.imagem = "landscape2.jpg";
  }

  mostraConteudo(){
    // this.classe = "mostra";
    this.mostraCollapse = false;
  }
}
