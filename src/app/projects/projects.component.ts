import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('flyInOut', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0px)'
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(80px)'
        })
      ),
      transition('show => hide', animate('.8s ease-out')),
      transition('hide => show', animate('.8s ease-out'))
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  typedOptions = {
    strings: ['projects'],
    typeSpeed: 200,
    backSpeed: 100,
    startDelay: 500,
    showCursor: false,
    loop: false
  };
  typed: Typed;
  viewportVisited = false;
  statePar1: boolean;
  statePar2: boolean;

  constructor() {}

  ngOnInit() {
    this.typed = new Typed('.typed-element-projects', this.typedOptions);
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
    }
    if (!visible) {
      this.viewportVisited = false;
    }
  }
  public inViewportPar1({
    target,
    visible
  }: {
    target: Element;
    visible: boolean;
  }): void {
    if (visible) {
      this.statePar1 = true;
    } else {
      this.statePar1 = false;
    }
  }
  public inViewportPar2({
    target,
    visible
  }: {
    target: Element;
    visible: boolean;
  }): void {
    if (visible) {
      this.statePar2 = true;
    } else {
      this.statePar2 = false;
    }
  }
}
