import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectDetailsComponent } from './project-details.component';

describe('ProjectDetailsComponent', () => {
  let component: ProjectDetailsComponent;
  let fixture: ComponentFixture<ProjectDetailsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProjectDetailsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
