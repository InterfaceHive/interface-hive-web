import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyContributionsComponent } from './view-my-contributions.component';

describe('ViewMyContributionsComponent', () => {
  let component: ViewMyContributionsComponent;
  let fixture: ComponentFixture<ViewMyContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMyContributionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
