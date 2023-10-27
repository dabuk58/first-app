import { Component, Input, OnInit } from '@angular/core';
import { CommentData } from '../../models/comment.model';
import { LikesService } from 'src/app/services/likes.service';

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.scss']
})
export class CommentsDetailsComponent implements OnInit{
  @Input() comments!: CommentData[];

  constructor(private likesService: LikesService){}

  ngOnInit(): void {
    
  }

  onLike(){
    this.likesService.addLike();
  }
}
