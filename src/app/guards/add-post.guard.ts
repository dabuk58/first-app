import { CanDeactivateFn } from '@angular/router';

export const addPostGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  if(component.isAdded){
    return true;
  }
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
