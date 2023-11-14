import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalLoginComponent } from './local-login.component';

describe('LocalLoginComponent', () => {
  let component: LocalLoginComponent;
  let fixture: ComponentFixture<LocalLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalLoginComponent]
    });
    fixture = TestBed.createComponent(LocalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
