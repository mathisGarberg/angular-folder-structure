import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-flip-card-back',
  templateUrl: './flip-card-back.component.html',
  styleUrls: ['./flip-card-back.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlipCardBackComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
