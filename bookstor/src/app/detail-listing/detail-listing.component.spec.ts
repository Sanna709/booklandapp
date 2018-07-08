import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListingComponent } from './detail-listing.component';

describe('DetailListingComponent', () => {
  let component: DetailListingComponent;
  let fixture: ComponentFixture<DetailListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
