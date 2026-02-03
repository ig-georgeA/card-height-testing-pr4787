import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-actions-column-1',
  imports: [IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxDividerDirective, IgxIconComponent],
  templateUrl: './actions-column-1.component.html',
  styleUrls: ['./actions-column-1.component.scss']
})
export class ActionsColumn1Component {}
