import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photos';

@Injectable({
  providedIn: 'root'
})
export class ServjsonplaceholderService {

  private urlAPI = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) { }

  getPhotos(initial: number, itemsPerPage: number) {
    // returns an Observable of the HttpResponse, with a response body in the requested type.
    // <string> -> Generic
    return this.http.get<Photo[]>(`${this.urlAPI}?_start=${initial}&_limit=${itemsPerPage}`);
  }

}
