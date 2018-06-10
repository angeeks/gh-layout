import { Component } from '@angular/core';

import { LayoutData } from '@angeeks/gh-layout';

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  desc = '';
  constructor(private data: LayoutData) {
    data.init({ name: 'gh-layout' });
    data.repo.subscribe((r: any) => {
      this.title = r.full_name;
      this.desc = r.description;
    });
  }
}
