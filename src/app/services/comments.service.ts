import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentData } from '../comments/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  fetchComments(postId: number){
    return this.http.get<CommentData[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }
}
