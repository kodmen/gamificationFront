import { Component, Input, OnInit } from '@angular/core';
import { ForumService } from 'src/app/core/services/forum.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { YorumService } from 'src/app/core/services/yorum.service';
import { IForm } from 'src/app/entities/form.model';
import { IYorum } from 'src/app/entities/yorum.model';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {

  @Input() comments:IForm;
  // public yorumlar[]:IYorum[];
  yorumlar?: IYorum[];
  constructor(private forumService:ForumService,private yorumService:YorumService,private notificationServies:NotificationService) { }

  ngOnInit(): void {
    console.log("forum için",this.comments.id);
    this.yorumService.getAllByFormId(this.comments.id).subscribe(res=>{
      this.yorumlar = res;
      console.log(this.yorumlar);
      
    },err=>{this.notificationServies.showError("","hata form verisi gelmedi");
    })
  }

}
