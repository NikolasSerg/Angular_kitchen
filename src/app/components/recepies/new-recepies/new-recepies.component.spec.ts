import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecepiesComponent } from './new-recepies.component';

describe('NewRecepiesComponent', () => {
  let component: NewRecepiesComponent;
  let fixture: ComponentFixture<NewRecepiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecepiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecepiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
