import { fakeAsync, tick } from '@angular/core/testing';
import { ComponentSuite as Component } from '@angeeks/testing';
import { LayoutData, LayoutDataApi } from '@angeeks/gh-layout';
import { LayoutDataApi as MockApi } from '@angeeks/gh-layout/testing';

import { AppComponent as Tag } from './app.component';

Component.suite<Tag>(Tag, (spec) => {
  spec.init({
    providers: [
      LayoutData,
      { provide: LayoutDataApi, useClass: MockApi }
    ]
  });
  describe('init', () => {
    beforeEach(fakeAsync(() => {
      tick();
    }));
    spec.expectProperty('title', 'gh-layout');
    spec.expectProperty('desc', 'test desc');
  });
});
