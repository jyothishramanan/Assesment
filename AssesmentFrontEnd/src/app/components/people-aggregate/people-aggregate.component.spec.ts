import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAggregateComponent } from './people-aggregate.component';

describe('PeopleAggregateComponent', () => {
  let component: PeopleAggregateComponent;
  let fixture: ComponentFixture<PeopleAggregateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleAggregateComponent]
    });
    fixture = TestBed.createComponent(PeopleAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
