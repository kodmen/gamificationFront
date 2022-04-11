import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataUtilService } from './data-util.service';

@Injectable({
  providedIn: 'root'
})
export class ResimService {

  constructor(private dataUtils:DataUtilService,private http:HttpClient) { }

  getUrlImage(img:string){
    return `background-image: url(${img});`;
  }

  aciklamaYaziSabitle(aciklama:string,sinir:number=180):string{
    if(aciklama.length > sinir) return aciklama.substring(0,sinir)+"..."
    return aciklama
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  getProfilePhoto(src:string):string{
    if(src != null){
      return `http://localhost:8080/api/image?name=${src}`
    }
    return "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
  }

  public onError():string{
    return "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"

  }

}
