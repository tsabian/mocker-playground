import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockerRouteDetailComponent } from './mocker-route-detail.component';

describe('MockerRouteDetailComponent', () => {
  let component: MockerRouteDetailComponent;
  let fixture: ComponentFixture<MockerRouteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockerRouteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockerRouteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
