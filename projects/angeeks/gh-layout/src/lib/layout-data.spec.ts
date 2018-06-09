import { ProviderSuite as Suite } from '@angeeks/testing';

import { LayoutDataApi as MockApi } from '../../testing';
import { LayoutDataApi } from './layout-data.api';
import { LayoutData as Foo } from './layout-data';

Suite.on<Foo>(Foo, (spec) => {
  spec.init({
    providers: [
      { provide: LayoutDataApi, useClass: MockApi }
    ]
  });

  function expectThrow(fn, msg) {
    it(`throws Error: ${msg}`, () => {
      expect(fn).toThrow(new Error(msg));
    });
  }
  describe('.init()', () => {
    let name = '';
    describe('without args', () => {
      expectThrow(() => {
        spec.subject.init();
      }, 'args cannot be undefined');
    });
    describe('with empty object', () => {
      expectThrow(() => {
        spec.subject.init({});
      }, 'repoName not defined, call .init(opts) first');
    });
    describe('with { name: "test" }', () => {
      beforeEach(() => {
        name = 'test';
        spec.subject.init({ name });
      });
      spec.expectProperty('repoName', 'test');
    });
  });
  describe('.repo', () => {
    let data;
    beforeEach(() => {
      data = null;
      spec.subject.init({ name: 'tes' });
      spec.subject.repo.subscribe(e => {
        data = e;
      });
    });
    it('has data returned', () => {
      expect(data).toEqual({ full_name: 'tes', description: 'test desc' });
    });
  });
  describe('.readme', () => {
    let data;
    beforeEach(() => {
      data = null;
      spec.subject.init({ name: 'tes' });
      spec.subject.readme.subscribe(e => {
        data = e;
      });
    });
    it('has data returned', () => {
      expect(typeof data).toEqual('string');
    });
  });
});
