import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../models/post.model';
import { Subscription } from 'rxjs';
import { LikesService } from 'src/app/services/likes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  sub!: Subscription;

  constructor(private route: ActivatedRoute,
              private likesService: LikesService){}

  ngOnInit(): void {
    this.posts = this.route.snapshot.data['posts'];
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
