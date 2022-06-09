/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
    remember: false,
  };

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('User ', this.user.username);
    console.log('Pass ', this.user.password);
    console.log('Remember ', this.user.remember);
    this.dialogRef.close();
  }
}
