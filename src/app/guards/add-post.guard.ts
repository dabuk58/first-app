import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate{
  canDeactivate: () => boolean | Promise<boolean> | Observable<boolean>;
}

export const addPostGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  console.log(component.formGroup.controls.postTitle.dirty);
  const controls = component.formGroup.controls;
  if(component && (controls.postTitle && controls.postTitle.dirty || controls.postBody && controls.postBody.dirty || controls.postUser && controls.postUser.dirty)){
    
    const confirmation = confirm('You have unsaved changes! Are you sure?');
    
    if(confirmation){
      return true;
    } else {
      return false;
    }
  }
  return true;
};
