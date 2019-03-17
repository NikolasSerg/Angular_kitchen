import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRecepiesComponent } from './top-recepies.component';

describe('TopRecepiesComponent', () => {
  let component: TopRecepiesComponent;
  let fixture: ComponentFixture<TopRecepiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRecepiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRecepiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
