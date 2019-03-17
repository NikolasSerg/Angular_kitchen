import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRecepiesComponent } from './popular-recepies.component';

describe('PopularRecepiesComponent', () => {
  let component: PopularRecepiesComponent;
  let fixture: ComponentFixture<PopularRecepiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularRecepiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularRecepiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
