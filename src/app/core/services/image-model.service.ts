import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IImageModel, getImageModelIdentifier } from 'src/app/entities/image-model.model';
import { EntityResponseType } from './ders.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ImageModelService {

  constructor(protected http:HttpClient,protected urlService:UrlService) { }

  protected resourceUrl = this.urlService.getUrl("/image-models");

  create(imageModel: IImageModel): Observable<EntityResponseType> {
    return this.http.post<IImageModel>(this.resourceUrl, imageModel, { observe: 'response' });
  }

  update(imageModel: IImageModel): Observable<EntityResponseType> {
    return this.http.put<IImageModel>(`${this.resourceUrl}/${getImageModelIdentifier(imageModel) as number}`, imageModel, {
      observe: 'response',
    });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IImageModel>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

}
