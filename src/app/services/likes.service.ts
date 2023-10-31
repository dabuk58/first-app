import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesService{
  private likes: number = this.getRandomNumber(2000, 15000);
  private amountOfLikes = new BehaviorSubject<number>(this.likes);
  //private amountOfLikes = new Subject<number>(this.likes);

  constructor() { }

  get getLikes(){
    return this.amountOfLikes.asObservable();
  }

  addLike(){
    this.likes++;
    this.amountOfLikes.next(this.likes);
  }

  getRandomNumber(min: number, max: number){
    return Math.floor(Math.random() * (max - min) + min);
  }
}
