import { ComponentSuite as Component } from '@angeeks/testing';
import { AppData } from './app.data';
import { AppData as MockAppData } from './testing';

import { AppComponent as Tag } from './app.component';

Component.suite<Tag>(Tag, (spec) => {
  spec.init({
    providers: [
      { provide: AppData, useClass: MockAppData }
    ]
  });
  spec.expectProperty('title', 'test');
  spec.expectProperty('desc', 'test');
});
