import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppData {
  get repo() {
    return of({
      full_name: 'test',
      description: 'test'
    });
  }
}
