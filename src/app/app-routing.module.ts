import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from './geral/erro/erro.component';
import { HomeComponent } from './geral/home/home.component';
import { PhotosComponent } from './jsonplaceholder/photos/photos.component';
import { FilhoinfocarroComponent } from './paifilho/filhoinfocarro/filhoinfocarro.component';
import { PaigestaocarrosComponent } from './paifilho/paigestaocarros/paigestaocarros.component';
import { TesteComponent } from './testes/teste/teste.component';
import { TestedadosComponent } from './testes/testedados/testedados.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", pathMatch: 'full', redirectTo: '' },
  { path: "teste", component: TesteComponent },
  { path: "testedados", component: TestedadosComponent },
  { path: "carros", component: PaigestaocarrosComponent },
  { path: "carro/:id", component: FilhoinfocarroComponent },
  { path: "photos", component: PhotosComponent },
  { path: "**", component: ErroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
