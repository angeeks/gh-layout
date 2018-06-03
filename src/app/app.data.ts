import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const repoApi = 'https://api.github.com/repos/angeeks/gh-layout';
@Injectable({
  providedIn: 'root'
})
export class AppData {
  constructor(private http: HttpClient) { }
  get repo() {
    return this.http.get(repoApi).pipe(map(e => {
      return e;
    }));
  }
}
