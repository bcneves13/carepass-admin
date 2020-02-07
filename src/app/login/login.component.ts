import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '@services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private storage: StorageService, private router: Router) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.storage.setObject('user', this.loginForm.value);
    this.router.navigate(['']);
  }
}
