import {Injectable} from '@angular/core';
import {Posts} from './posts';

let posts = [
  new Posts(1, 'Борщ', 'Украина'),
  new Posts(2, 'Сало', 'Украина'),
  new Posts(3, 'Олівє', 'Франція')
];

let postsPromise = Promise.resolve(posts);

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor() {
  }

  getAll(): Promise<Posts[]> {
    return postsPromise;
  }
  getPost(id: number): Promise<Posts> {
    return postsPromise
      .then(posts => posts.find(x => x.id == id));
  }
}
