import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment as env } from '@env/environment';
import { ThemeService } from '../../core/service/theme.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
}
