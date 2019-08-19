import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-my-modal',
    templateUrl: './my-modal.component.html',
    styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {

  @Input() id;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
      console.log(this.id);
  }
}
