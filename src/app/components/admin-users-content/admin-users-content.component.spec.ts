import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersContentComponent } from './admin-users-content.component';

describe('AdminUsersContentComponent', () => {
  let component: AdminUsersContentComponent;
  let fixture: ComponentFixture<AdminUsersContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersContentComponent]
    });
    fixture = TestBed.createComponent(AdminUsersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
