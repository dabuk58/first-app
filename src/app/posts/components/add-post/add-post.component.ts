import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';

//TODO dyrektywa ograniczająca wpisywanie znaków w polu user id

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit, OnDestroy{
  formGroup!: FormGroup;
  subscription!: Subscription;

  constructor(private postsService: PostsService){}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      postTitle: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      }),
      postBody: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(200)
        ]
      }),
      postUser: new FormControl(null, {
        updateOn: 'blur',
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
    });
  }

  getTitleErrorMessage(){
    if (this.formGroup.get('postTitle')?.hasError('required')){
      return 'You must enter a title';
    } else if (this.formGroup.get('postTitle')?.hasError('minLength')){
      return 'Minimal length is 3';
    } else {
      return 'Maximum length is 20';
    }
  }

  getBodyErrorMessage(){
    if (this.formGroup.get('postBody')?.hasError('required')){
      return 'You must type something';
    } else if (this.formGroup.get('postBody')?.hasError('minLength')){
      return 'Minimal length is 30';
    } else if (this.formGroup.get('postBody')?.hasError('maxLength')){
      return 'Maximum length is 200';
    } else {
      return '';
    }
  }

  getUserErrorMessage(){
    if (this.formGroup.get('postUser')?.hasError('required')){
      return 'You must enter user id';
    } else if (this.formGroup.get('postUser')?.hasError('min')){
      return 'Users starts with number one!';
    } else {
      return 'Last user id is 10!';
    }
  }

}
