import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BlogStore, BlogState } from './blog.store';

@Injectable({ providedIn: 'root' })
export class BlogQuery extends QueryEntity<BlogState> {

  constructor(protected store: BlogStore) {
    super(store);
  }

}
