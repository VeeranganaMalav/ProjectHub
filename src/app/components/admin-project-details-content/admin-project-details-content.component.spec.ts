import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectDetailsContentComponent } from './admin-project-details-content.component';

describe('AdminProjectDetailsContentComponent', () => {
  let component: AdminProjectDetailsContentComponent;
  let fixture: ComponentFixture<AdminProjectDetailsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProjectDetailsContentComponent]
    });
    fixture = TestBed.createComponent(AdminProjectDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
