import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Routes from '../Routes';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private http: HttpClient) { }

  add(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.CONTACT, formData).toPromise();
  }
  getLocation(): Promise<any> {
    return this.http.get<any>(Routes.LOCATION).toPromise();
  }
  getPage(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }
}
