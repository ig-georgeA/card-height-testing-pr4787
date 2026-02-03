import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-card-default',
  imports: [IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent],
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss']
})
export class CardDefaultComponent {}
