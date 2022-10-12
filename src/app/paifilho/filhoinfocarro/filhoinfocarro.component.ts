import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/shared/carro';
import { ServdadoscarrosService } from 'src/app/shared/servdadoscarros.service';
// import { carros } from 'src/app/shared/carros';

@Component({
  selector: 'app-filhoinfocarro',
  templateUrl: './filhoinfocarro.component.html',
  styleUrls: ['./filhoinfocarro.component.css']
})
export class FilhoinfocarroComponent implements OnInit {

  id!: number;
  carro!: Carro;
  // listaCarros: Carro[] = carros;
  listaCarros!: Carro[];

  constructor(private rotaactiva: ActivatedRoute, private servDados: ServdadoscarrosService) { }

  ngOnInit(): void {
    this.listaCarros = this.servDados.getAllCars();

    this.id = Number(this.rotaactiva.snapshot.paramMap.get("id"));

    // this.carro = this.listaCarros
    // .filter(objecto => objecto.id! === this.id)[0];
    this.carro = this.servDados.getCarById(this.id);
  }

}
