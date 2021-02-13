import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService } from '@data/service/project.service';
import { Project } from '@data/schema/project';
import { MyModalComponent } from '../modal/my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projects$: Observable<Project[]> = this.projectService.getAll();

  constructor(
    private modalService: NgbModal,
    private projectService: ProjectService
  ) {}

  openMyModal() {
    const modalRef = this.modalService.open(MyModalComponent);
    modalRef.componentInstance.id = 1;
    modalRef.result.then(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
}
