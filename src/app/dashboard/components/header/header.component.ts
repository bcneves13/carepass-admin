import { Component, OnInit } from '@angular/core';
import { StorageService } from '@services';
import { UserLogin } from '@interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: UserLogin;
  
  constructor(private store: StorageService, private router: Router) { }

  ngOnInit() {
    this.user = this.store.getObject('user');
  }

  logout() {
    this.store.removeItem('user');
    this.router.navigate(['/']);
    window.location.reload();
  }
}
