import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentData } from '../../models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() commentToDisplay!: CommentData;
  @Output() like = new EventEmitter<any>();

  onLike(){
    this.like.emit();
  }
}
