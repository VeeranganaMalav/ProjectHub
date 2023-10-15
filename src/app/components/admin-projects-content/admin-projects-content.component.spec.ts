import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectsContentComponent } from './admin-projects-content.component';

describe('AdminProjectsContentComponent', () => {
  let component: AdminProjectsContentComponent;
  let fixture: ComponentFixture<AdminProjectsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProjectsContentComponent]
    });
    fixture = TestBed.createComponent(AdminProjectsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
