import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { NosotrosCardComponent } from './nosotros/nosotros-card/nosotros-card.component';
import { NosotrosMisVisComponent } from './nosotros/nosotros-mis-vis/nosotros-mis-vis.component';
// Import your library
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapaCoverturaComponent } from './servicios/mapa-covertura/mapa-covertura.component';



@NgModule({
  declarations: [
    BannerComponent,
    NosotrosComponent, 
    ServiciosComponent, 
    ContactenosComponent, 
    NosotrosCardComponent,
     NosotrosMisVisComponent,
     MapaCoverturaComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,

  ],
  exports: [
    BannerComponent,
    NosotrosComponent, 
    ServiciosComponent, 
    ContactenosComponent
  ]

})
export class PagesModule { }
