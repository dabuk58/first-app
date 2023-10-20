import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit{


  constructor(private postsService: PostsService){}

  ngOnInit(): void {
    this.postsService.fetchPosts();
  }
}
