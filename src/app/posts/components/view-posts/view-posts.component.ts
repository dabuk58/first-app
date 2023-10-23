import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  isLoading = true;

  constructor(private postsService: PostsService){}

  ngOnInit(): void {
    this.postsService.fetchPosts();
    this.postsService.posts.subscribe(posts => {
      this.posts = posts;
      this.isLoading = false;
    });
  }



  ngOnDestroy(): void {
  
  }

}
