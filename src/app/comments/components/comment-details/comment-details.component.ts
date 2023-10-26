import { Component, Input, OnInit } from '@angular/core';
import { CommentData } from '../../models/comment.model';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit{
  @Input() comments!: CommentData[];

  ngOnInit(): void {
    console.log(this.comments);
  }

}
