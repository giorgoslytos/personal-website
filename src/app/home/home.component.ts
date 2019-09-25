import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typedOptions = {
    strings: ['Software Engineer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 5500,
    showCursor: false,
    loop: false
  };
  constructor() {}

  ngOnInit() {
    const typed = new Typed('.typed-element', this.typedOptions);
  }
}
