import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService, Project } from '@app/core';
import { Observable } from 'rxjs';

import { MyModalComponent } from '../modals/my-modal.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    projects$: Observable<Project[]>;
    
    constructor(
        private modalService: NgbModal,
        private projectService: ProjectService
    ) { }

    ngOnInit(): void {
        this.loadProjects();
    }
    
    loadProjects() {
        this.projects$ = this.projectService.getAll();
    }

    openMyModal() {
        // this.modalService.open(MyModalComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        //   this.closeResult = `Closed with: ${result}`;
        // }, (reason) => {
        //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        // });
    }

}
