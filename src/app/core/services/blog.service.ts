import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private urlService:UrlService,private http:HttpClient) { }

  getAllBlog(){
    
  }
}
