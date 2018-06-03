import { ComponentSuite as Component } from '@angeeks/testing';
import { AppComponent as Tag } from './app.component';

Component.suite<Tag>(Tag, (spec)=> {
  spec.init();
});
