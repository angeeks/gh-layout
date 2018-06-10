import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutDataApi {
  constructor(private http: HttpClient) { }
  repo(name) {
    const url = `https://api.github.com/repos/angeeks/${name}`;
    return this.http.get(url);
  }
  readme(name) {
    const responseType = 'text';
    const url = `https://raw.githubusercontent.com/angeeks/${name}/master/README.md`;
    return this.http.get(url, { responseType });
  }
}
