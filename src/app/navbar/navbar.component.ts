import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hamIsActive = false;
  navLinksHidden = true;
  transparent = false;
  lastScrollPos = 0;
  currentScrollPos = 0;
  @HostListener('window:resize')
  onResize() {
    this.hamIsActive = false;
    this.navLinksHidden = true;
  }
  @HostListener('window:scroll')
  onScroll() {
    if (!this.hamIsActive) {
      this.currentScrollPos = window.pageYOffset;
      if (this.currentScrollPos > this.lastScrollPos) {
        this.transparent = true;
        this.lastScrollPos = this.currentScrollPos;
      } else {
        this.transparent = false;
        this.lastScrollPos = this.currentScrollPos;
      }
    }
  }

  constructor() {}

  onClick() {
    if (window.innerWidth > 900) {
      return;
    } else {
      this.hamIsActive = !this.hamIsActive;
      this.navLinksHidden = !this.navLinksHidden;
    }
  }
}
