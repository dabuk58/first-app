import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit, OnDestroy{
  formGroup!: FormGroup;
  subscription!: Subscription;
  isAdded: boolean = false;

  constructor(private postsService: PostsService,
              private router: Router){}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      postTitle: new FormControl(null, {
        updateOn: 'change',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      }),
      postBody: new FormControl(null, {
        updateOn: 'change',
        validators: [
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(200)
        ]
      }),
      postUser: new FormControl(null, {
        updateOn: 'change',
        validators: [
          Validators.required,
          Validators.min(1),
          Validators.max(10)
        ]
      }),
    })
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  onAddPost(){
    const userId = this.formGroup.get('postUser')?.value;
    const title = this.formGroup.get('postTitle')?.value;
    const body = this.formGroup.get('postBody')?.value;
    this.subscription = this.postsService.addPost(userId, title, body).subscribe(resultData => {
      console.log(resultData);
      this.isAdded = true;
      this.router.navigateByUrl('/posts');
    });
  }

  getTitleErrorMessage(){
    const control = this.formGroup.get('postTitle');

    if (control?.hasError('required')){
      return 'You must enter a title';
    } else if (control?.hasError('minlength')){
      return 'Minimal length is 3';
    } else {
      return 'Maximum length is 20';
    }
  }

  getBodyErrorMessage(){
    const control = this.formGroup.get('postBody');

    if (control?.hasError('required')){
      return 'You must type something';
    } else if (control?.hasError('minlength')){
      return 'Minimal length is 30';
    } else{
      return 'Maximum length is 200';
    }
  }

  getUserErrorMessage(){
    const control = this.formGroup.get('postUser');

    if (control?.hasError('required')){
      return 'You must enter user id';
    } else{
      return 'Enter number between 1 and 10';
    }
  }

}
