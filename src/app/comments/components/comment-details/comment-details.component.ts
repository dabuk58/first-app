import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommentData } from '../../models/comment.model';
import { BehaviorSubject } from 'rxjs';
import { LikesService } from 'src/app/services/likes.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit{
  @Input() comments!: CommentData[];

  constructor(private likesService: LikesService){}

  ngOnInit(): void {
    
  }

  onLike(){
    this.likesService.addLike();
  }
}
