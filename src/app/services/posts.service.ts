import { Injectable } from '@angular/core';
import { Post } from '../posts/models/post.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, map, tap } from 'rxjs';

@Injectable()
export class PostsService {
  private _posts = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  get posts(){
    return this._posts.asObservable();
  }

  fetchPosts(){
    return this.http.get<Post[]>('https://urlToChange/posts')
      .pipe(tap(posts => {
        this._posts.next(posts);
      }));
  }

  addPost(userId: number, title: string, body: string){
    const newPostId = this._posts.value.length + 1;
    const postData: Post = { userId, id: newPostId, title, body};
    return this.http.post<Post>('https://urlToChange/posts', postData)
      .pipe(tap(newPost => {
        console.log(newPost);
        this._posts.next([...this._posts.getValue(), newPost]);
      }));
  }

}
