import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

@Injectable()
export class PostsService {
  private _posts = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  get posts(){
    return this._posts.asObservable();
  }

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
      })).subscribe(post => {
        this._posts.next(post);
      });
  }

  addPost(userId: number, title: string, body: string){
    const newPostId = this._posts.value.length + 1;
    const postData: Post = { userId, id: newPostId, title, body};
    this._posts.next([...this._posts.getValue(), postData]);
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', postData);
  }

}
