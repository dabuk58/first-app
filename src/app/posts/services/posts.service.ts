import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable()
export class PostsService {
  private _posts = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  get posts(){
    return this._posts.asObservable();
  }

  fetchPosts(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(tap(posts => console.log(posts)),map(post => {
        return post.map(
          postData => new Post(
            postData.userId,
            postData.id,
            postData.title,
            postData.body
          ));
      }), tap(posts => console.log(posts))).subscribe(posts => {
        this._posts.next(posts);
      });
  }

  addPost(userId: number, title: string, body: string){
    const newPostId = this._posts.value.length + 1;
    const postData: Post = { userId, id: newPostId, title, body};
    this._posts.next([...this._posts.getValue(), postData]);
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', postData);
  }

}
