import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Subscription } from 'rxjs';
import Typed from 'typed.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  mailForm: FormGroup;
  success: boolean;
  postData: string;
  json: string;
  subscription: Subscription;
  viewportVisited = false;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  typedOptions = {
    strings: ['contact'],
    typeSpeed: 200,
    backSpeed: 100,
    startDelay: 500,
    showCursor: false,
    loop: false
  };
  typed: Typed;

  constructor(private httpService: HttpService, private fb: FormBuilder) {}

  get name() {
    return this.mailForm.get('name');
  }
  get email() {
    return this.mailForm.get('email');
  }
  get subject() {
    return this.mailForm.get('subject');
  }
  get message() {
    return this.mailForm.get('message');
  }

  ngOnInit() {
    this.mailForm = this.fb.group({
      name: '',
      email: ['', [Validators.required, Validators.email]],
      subject: '',
      message: ['', [Validators.required]]
    });
    this.typed = new Typed('.typed-element-contact', this.typedOptions);
  }
  getErrorMessage() {
    return this.emailControl.hasError('required')
      ? 'You must insert a value'
      : this.emailControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  onSubmit() {
    console.log(this.mailForm.value);
    this.httpService
      .sendEmail(this.mailForm.value)
      .subscribe(
        respone => console.log('Success!', respone),
        error => console.error('Error!', error)
      );
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
      console.log('contact is visible');
    }
    if (!visible) {
      this.viewportVisited = false;
      console.log('contact is invisible');
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
