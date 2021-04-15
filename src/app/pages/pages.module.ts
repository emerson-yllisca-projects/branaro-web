import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { NosotrosCardComponent } from './nosotros/nosotros-card/nosotros-card.component';
import { NosotrosMisVisComponent } from './nosotros/nosotros-mis-vis/nosotros-mis-vis.component';
//SWIPER CARRUSEL



@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent, 
    ServiciosComponent, 
    ContactenosComponent, NosotrosCardComponent, NosotrosMisVisComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent,
    NosotrosComponent, 
    ServiciosComponent, 
    ContactenosComponent
  ]

})
export class PagesModule { }
