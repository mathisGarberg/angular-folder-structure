import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  version = environment.version;

  constructor() { }

  ngOnInit(): void { }
}
