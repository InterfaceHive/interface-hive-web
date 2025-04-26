import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyRequestsComponent } from './view-my-requests.component';

describe('ViewMyRequestsComponent', () => {
  let component: ViewMyRequestsComponent;
  let fixture: ComponentFixture<ViewMyRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMyRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
