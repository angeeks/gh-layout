import { NgModule } from '@angular/core';

import { LayoutDataApi } from './layout-data.api';
import { LayoutData } from './layout-data';
import { BodyComponent } from './body/body';
import { HeroComponent } from './hero/hero';

@NgModule({
  declarations: [
    HeroComponent,
    BodyComponent
  ],
  providers: [
    LayoutData,
    LayoutDataApi
  ],
  exports: [
    HeroComponent,
    BodyComponent
  ]
})
export class GhLayoutModule { }
