import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMockRouteComponent } from './add-mock-route.component';

describe('AddMockRouteComponent', () => {
  let component: AddMockRouteComponent;
  let fixture: ComponentFixture<AddMockRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMockRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMockRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
