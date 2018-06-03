import { Component } from '@angular/core';

import { AppData } from './app.data';

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  desc = '';
  constructor(private data: AppData) {
    data.repo.subscribe((r: any) => {
      this.title = r.full_name;
      this.desc = r.description;
    });
  }
}
