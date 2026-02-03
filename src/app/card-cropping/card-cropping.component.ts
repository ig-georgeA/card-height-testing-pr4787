import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-card-cropping',
  imports: [IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent],
  templateUrl: './card-cropping.component.html',
  styleUrls: ['./card-cropping.component.scss']
})
export class CardCroppingComponent {}
