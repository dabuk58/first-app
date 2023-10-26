import { Component, OnInit } from '@angular/core';
import { LikesService } from '../services/likes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  amountOfLikes!: number;

  constructor(private likesService: LikesService){}

  ngOnInit(): void {
    this.likesService.getLikes.subscribe(likes => {
      this.amountOfLikes = likes;
    });
  }

}
