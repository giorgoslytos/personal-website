import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  typedOptions = {
    strings: ['about'],
    typeSpeed: 200,
    backSpeed: 100,
    startDelay: 500,
    showCursor: false,
    loop: false
  };
  typed: Typed;
  viewportVisited = false;

  constructor() {}

  ngOnInit() {
    this.typed = new Typed('.typed-element-about', this.typedOptions);
  }

  public inViewportTitle({
    target,
    visible
  }: {
    target: Element;
    visible: boolean;
  }): void {
    if (visible && !this.viewportVisited) {
      this.typed.reset();
      this.viewportVisited = true;
      console.log('about is visible');
    }
    if (!visible) {
      this.viewportVisited = false;
      console.log('about is invisible');
    }
  }
}
