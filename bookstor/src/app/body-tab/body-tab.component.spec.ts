import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTabComponent } from './body-tab.component';

describe('BodyTabComponent', () => {
  let component: BodyTabComponent;
  let fixture: ComponentFixture<BodyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
