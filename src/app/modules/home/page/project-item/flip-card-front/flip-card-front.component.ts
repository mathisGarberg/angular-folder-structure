import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-flip-card-front',
  templateUrl: './flip-card-front.component.html',
  styleUrls: ['./flip-card-front.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlipCardFrontComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
