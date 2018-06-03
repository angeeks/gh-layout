import { NgModule } from '@angular/core';

import { BodyComponent } from './body';
import { HeroComponent } from './hero';

@NgModule({
  imports: [],
  declarations: [
    HeroComponent,
    BodyComponent
  ],
  exports: [
    HeroComponent,
    BodyComponent
  ]
})
export class GhLayoutModule { }
