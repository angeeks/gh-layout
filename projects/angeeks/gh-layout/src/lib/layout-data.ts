import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutDataApi } from './layout-data.api';

@Injectable({
  providedIn: 'root'
})
export class LayoutData {
  repoName;
  constructor(private api: LayoutDataApi) { }
  init(opts) {
    if (!opts) {
      throw new Error('args cannot be undefined');
    }
    const { name } = opts;
    this.repoName = name;
    this.checkConfig();
  }
  get repo() {
    this.checkConfig();
    return this.api.repo(this.repoName);
  }
  get readme() {
    this.checkConfig();
    return this.api.readme(this.repoName);
  }

  private checkConfig() {
    if (!this.repoName) {
      throw new Error('repoName not defined, call .init(opts) first');
    }
  }
}
