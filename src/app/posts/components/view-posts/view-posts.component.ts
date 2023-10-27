import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { Post } from '../../models/post.model';
import { Subscription } from 'rxjs';
import { LikesService } from 'src/app/services/likes.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  isLoading = true;
  sub!: Subscription;

  constructor(private postsService: PostsService,
              private likesService: LikesService){}

  ngOnInit(): void {
    this.postsService.fetchPosts().subscribe(posts => {
      this.posts = posts;
      this.isLoading = false;
    });
  }

  onLike(){
    this.likesService.addLike();
  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

}
