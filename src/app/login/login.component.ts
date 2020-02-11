import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '@services';
import {ApiService} from '@services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private storage: StorageService,
              private router: Router,
              private apiService: ApiService) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.apiService.post('/admin/login', this.loginForm.value).then(response => {
      console.log(response);
      if(response.login !== false){
          this.storage.setObject('user', response);
          this.router.navigate(['']);
        }
      }, err => {
        alert("Usuário não encontrado");
    })
  }
}
