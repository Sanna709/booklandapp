import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTabComponent } from './footer-tab.component';

describe('FooterTabComponent', () => {
  let component: FooterTabComponent;
  let fixture: ComponentFixture<FooterTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
