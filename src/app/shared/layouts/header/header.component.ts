import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/alert/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public alertService: AlertService) {}
  options = {
    autoClose: false,
    keepAfterRouteChage: false,
  };
  ngOnInit(): void {}
}
