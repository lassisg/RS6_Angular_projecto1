import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TesteComponent } from './testes/teste/teste.component';
import { TestedadosComponent } from './testes/testedados/testedados.component';
import { PaigestaocarrosComponent } from './paifilho/paigestaocarros/paigestaocarros.component';
import { FilhopesquisacarrosComponent } from './paifilho/filhopesquisacarros/filhopesquisacarros.component';
import { FilhotabelacarrosComponent } from './paifilho/filhotabelacarros/filhotabelacarros.component';
import { FilhoinserecarroComponent } from './paifilho/filhoinserecarro/filhoinserecarro.component';
import { FilhofiltrocarrosComponent } from './paifilho/filhofiltrocarros/filhofiltrocarros.component';
import { ErroComponent } from './geral/erro/erro.component';
import { HomeComponent } from './geral/home/home.component';
import { FilhoinfocarroComponent } from './paifilho/filhoinfocarro/filhoinfocarro.component';
import { PhotosComponent } from './jsonplaceholder/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    TestedadosComponent,
    PaigestaocarrosComponent,
    FilhopesquisacarrosComponent,
    FilhotabelacarrosComponent,
    FilhoinserecarroComponent,
    FilhofiltrocarrosComponent,
    ErroComponent,
    HomeComponent,
    FilhoinfocarroComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
