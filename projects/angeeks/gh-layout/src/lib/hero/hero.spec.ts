import { ComponentSuite as Component } from '@angeeks/testing';
import { HeroComponent as Tag } from './hero';

Component.suite<Tag>(Tag, (spec) => {
  spec.init();
  function expectInput(name, value) {
    it(`should have ${name} to be ${value}`, () => {
      expect(spec.subject[name]).toEqual(value);
    });
  }

  expectInput('logo', 'https://angeeks.github.io/assets/angeeks.png');
  expectInput('title', '');
  expectInput('desc', '');
});
