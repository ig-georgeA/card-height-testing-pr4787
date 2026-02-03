import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-card-default-2',
  imports: [IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent],
  templateUrl: './card-default-2.component.html',
  styleUrls: ['./card-default-2.component.scss']
})
export class CardDefault2Component {}
