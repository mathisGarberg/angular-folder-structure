import { Component, Input } from '@angular/core';

import { Project } from '@data/schema/project';
import {
  trigger,
  state,
  style,
  keyframes,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    trigger('flipCard', [
      state(
        'cardFront',
        style({
          transform: 'rotateY(180deg)'
        })
      ),
      state(
        'cardBack',
        style({
          transform: 'rotateY(180deg)'
        })
      ),
      transition('cardFront => cardBack', [
        animate(
          '1s 0s ease-out',
          keyframes([
            style({
              transform: 'perspective(400px) rotateY(0deg)',
              offset: 0
            }),
            style({
              transform:
                'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(80deg)',
              offset: 0.4
            }),
            style({
              transform:
                'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(100deg)',
              offset: 0.5
            }),
            style({
              transform:
                'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(180deg)',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) rotateY(180deg)',
              offset: 1
            })
          ])
        )
      ]),
      transition('cardBack => cardFront', [
        animate(
          '1s 0s ease-in',
          keyframes([
            style({
              transform: 'perspective(400px) rotateY(180deg)',
              offset: 0
            }),
            style({
              transform:
                'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(100deg)',
              offset: 0.4
            }),
            style({
              transform:
                'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(80deg)',
              offset: 0.5
            }),
            style({
              transform:
                'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(0deg)',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) rotateY(0deg)',
              offset: 1
            })
          ])
        )
      ])
    ])
  ]
})
export class ProjectItemComponent {
  @Input() project: Project;

  flipState = 'cardFront';

  onFlipClick() {
    if (this.flipState === 'cardFront') {
      this.flipState = 'cardBack';
    } else {
      this.flipState = 'cardBack';
    }
  }
}
