import {  Component, ElementRef, OnInit, } from '@angular/core';
// import * as $ from "jquery";
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(private slide: ElementRef, 
    private step1: ElementRef,) { }

  ngOnInit(): void {
    
  }
 imageIndex = 1;
 translateX = 0;

 buttonValue!: boolean;
click(button:any){
   const carouselImages = this.slide.nativeElement.querySelector('.carousel__images');
  const numberOfImages = this.step1.nativeElement.querySelectorAll('.carousel__images .card').length;

  console.log("imageIndex",this.imageIndex);
  console.log("translate X",this.translateX);
  console.log("carouselImages",carouselImages);
  console.log("numberOfImages",numberOfImages);
  console.log("-----------");
  
   // NEXT == PREVIOUS
   // ENTONCES SUMA 310px
  
  if (this.buttonValue=button.id == 'previous') {;
    if (this.imageIndex !== 1) {
      this.imageIndex--;
      this.translateX += 310;
    }
  } 
    // PREVIOUS == PREVIOUS
   // ENTONCES RESTA 310px
  else  {
    if (this.imageIndex !== numberOfImages) {
      this.imageIndex++;
      this.translateX -= 310;
    }
 }
 carouselImages.style.transform = `translateX(${this.translateX}px)`;
}

clickprevious(){
  const carouselImages = this.slide.nativeElement.querySelector('.carousel__images');
  const numberOfImages = this.step1.nativeElement.querySelectorAll('.carousel__images .card').length;

}
}
