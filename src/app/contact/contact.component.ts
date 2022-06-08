/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit(): void {

  }

  createForm(): void {
    this.feedbackForm = this.fb.group({
      firstName: '',
      lastName: '',
      telnum: 0,
      agree: false,
      contacttype: 'None',
      message: ''
    })
  }

}
