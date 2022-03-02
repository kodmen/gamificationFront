import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AlertService } from 'src/app/core/alert/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public alertService: AlertService,public authService: AuthService) {}
  options = {
    autoClose: false,
    keepAfterRouteChage: false,

  };
  ngOnInit(): void {}

  logout() {
    this.authService.doLogout()
  }
}
