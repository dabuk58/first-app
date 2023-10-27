import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private likes: number = 1396;
  private amountOfLikes = new BehaviorSubject<number>(this.likes);
  //private amountOfLikes = new Subject<number>(this.likes);

  get getLikes(){
    return this.amountOfLikes.asObservable();
  }

  addLike(){
    this.likes++;
    this.amountOfLikes.next(this.likes);
  }

  constructor() { }
}
