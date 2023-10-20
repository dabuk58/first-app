import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Subject, map } from 'rxjs';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  fetchPosts(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(post => {
        return post.map(
          postData => new Post(
            postData.userId,
            postData.id,
            postData.title,
            postData.body
          ));
      }));
  }

}
