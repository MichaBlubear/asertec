import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('elementoPin') elementoPin!: ElementRef;

  constructor() {} // Constructor vacío
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elementoSuperior = document.querySelector('.bg-blue-500');
    const elementoPin = this.elementoPin.nativeElement;
    const elementoSuperiorRect = elementoSuperior!.getBoundingClientRect();
    
    if (elementoSuperiorRect.bottom <= 0) {
      elementoPin.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'z-10');
    } else {
      elementoPin.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-10');
    }
  }
}
