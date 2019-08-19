import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../../../data/schema/project';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project$: Observable<Project>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.project$ = this.route.data.pipe(map(data => data.project));
  }
}
