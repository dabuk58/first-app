import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent{
  formGroup: FormGroup;


  constructor(){
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
