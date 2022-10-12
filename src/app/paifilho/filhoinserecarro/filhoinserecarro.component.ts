import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Carro } from 'src/app/shared/carro';


@Component({
  selector: 'app-filhoinserecarro',
  templateUrl: './filhoinserecarro.component.html',
  styleUrls: ['./filhoinserecarro.component.css']
})
export class FilhoinserecarroComponent implements OnInit {

  @Output() dadosCarro : EventEmitter<Carro> = new EventEmitter();
  @Output() dadosCarroAlterado : EventEmitter<Carro> = new EventEmitter();
  @Input() 
  set carro(registo : any){
    // console.log(registo);
    if(registo !== undefined){
      // setValue (obriga a passar todos os campos)
      // patchValue (pode passar apenas alguns campos)
      this.formCarros.setValue({
        marca: registo.marca,
        modelo: registo.modelo,
        ano: registo.ano,
        disponivel: registo.disponivel
      });
      this.emInsercao = false;
      this.idAAlterar = registo.id;
    }
  }

  formCarros! : FormGroup;
  emInsercao : boolean = true;
  idAAlterar! : number;

  constructor() { }


  // classes aplicadas aos formulário
  // ng-touched | ng-untouched
  // ng-pristine | ng-dirty
  // ng-valid | ng-invalid 

  // https://angular.io/api/forms/Validators
  ngOnInit(): void {

    let hoje : Date = new Date();
    let anocorrente = hoje.getFullYear();

    this.formCarros = new FormGroup({
      marca : new FormControl('', {
        // updateOn:'submit',
        initialValueIsDefault:true, 
        validators:[
          Validators.required, 
          Validators.pattern('[a-zA-Z ]{3,20}')]}),
      modelo : new FormControl('', Validators.required),
      ano : new FormControl(null, [Validators.required, Validators.min(1950), Validators.max(anocorrente)]),
      disponivel : new FormControl(false)
    });
  }

  // lifecycle hook
  // ngOnDestroy()

  insereCarro(){
    // console.log(this.formCarros);
    // console.log(this.formCarros.value);
    if(this.formCarros.valid){
      
      if(this.emInsercao){
        this.dadosCarro.emit(this.formCarros.value);
      }else{
        console.log("Em alteração");
        this.dadosCarroAlterado.emit({
          id:this.idAAlterar,
          ...this.formCarros.value
        });
      }
      
      this.formCarros.reset();
      // this.formCarros.reset({
      //   marca:"",modelo:"",disponivel:false
      // });
    }else{
      alert("Formulário inválido!");
    }

  }

}
