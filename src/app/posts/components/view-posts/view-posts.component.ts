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
  // private posts = new Subject<Post[]>();
  private posts: Post[] = [];
  private subscription!: Subscription;

  constructor(private postsService: PostsService){}

  ngOnInit(): void {
    this.subscription = this.postsService.fetchPosts().subscribe(post => {
      this.posts = post;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
