import { NgModule } from '@angular/core';

import { BodyComponent } from './body/body';
import { HeroComponent } from './hero/hero';

@NgModule({
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
