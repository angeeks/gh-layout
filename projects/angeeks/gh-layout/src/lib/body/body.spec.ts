import { ComponentSuite as Component } from '@angeeks/testing';
import { BodyComponent as Tag } from './body';

Component.suite<Tag>(Tag, (spec) => {
  spec.init();
});
