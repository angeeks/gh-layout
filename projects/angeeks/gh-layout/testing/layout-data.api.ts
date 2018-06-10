import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutDataApi {
  constructor() { }
  repo(full_name) {
    const description = 'test desc';
    return of({ full_name, description });
  }
  readme(name) {
    return of(`# Test doc
    _this is_ some *text* in md file
    `);
  }
}
