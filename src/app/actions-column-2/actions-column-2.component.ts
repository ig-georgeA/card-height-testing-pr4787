import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-actions-column-2',
  imports: [IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxDividerDirective, IgxIconComponent],
  templateUrl: './actions-column-2.component.html',
  styleUrls: ['./actions-column-2.component.scss']
})
export class ActionsColumn2Component {}
