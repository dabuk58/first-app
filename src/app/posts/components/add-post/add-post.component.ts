import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';

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
          Validators.min(3),
          Validators.max(20)
        ]
      }),
      postBody: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.min(30),
          Validators.max(200)
        ]
      }),
    })
  }

  getTitleErrorMessage(){
    if (this.formGroup.get('postTitle')?.hasError('required')){
      return 'You must enter a title';
    } else if (this.formGroup.get('postTitle')?.hasError('min')){
      return 'Minimal length is 3';
    } else {
      return 'Maximum length is 20';
    }
  }

  getBodyErrorMessage(){
    if (this.formGroup.get('postBody')?.hasError('required')){
      return 'You must type something';
    } else if (this.formGroup.get('postBody')?.hasError('min')){
      return 'Minimal length is 30';
    } else {
      return 'Maximum length is 200';
    }
  }

}
