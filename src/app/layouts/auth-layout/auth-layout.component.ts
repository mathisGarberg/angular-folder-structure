import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  faUserCircle = faUserCircle;

  constructor() { }

  ngOnInit() {
  }

}
