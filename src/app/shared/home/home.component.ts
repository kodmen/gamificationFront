import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/alert/alert.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private notifyService : NotificationService) { }
   
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
  }
   
  showToasterError(){
      this.notifyService.showError("Something is wrong", "tutsmake.com")
  }
   
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "tutsmake.com")
  }
   
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "tutsmake.com")
  }
  ngOnInit(): void {
  }

}
