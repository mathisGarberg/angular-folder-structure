import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectService } from '@data/services/project.service';
import { Project } from '@data/schema/project';
import { MyModalComponent } from '../modal/my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects$: Observable<Project[]> = this.projectService.getAll();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  openMyModal() {}
}
