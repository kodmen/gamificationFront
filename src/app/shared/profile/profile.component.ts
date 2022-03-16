import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { OgrenciService } from 'src/app/core/services/ogrenci.service';
import { Ogrenci } from 'src/app/entities/ogrenci.model';
import { IUser } from 'src/app/entities/user-management';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private ogrenciService: OgrenciService
  ) {}
  user?: IUser;
  ogrenci?: Ogrenci;
  ngOnInit(): void {
    this.getOgrenci();
  }

  getOgrenci() {
    this.ogrenciService.getOgrenci().subscribe((res) => {
      this.ogrenci = res;
      console.log('serverdan gelen');
      console.log(res);
    });
  }

  getUser() {
    this.authService.getUserProfile().subscribe((res) => {
      this.user = res;
    });
  }
}
