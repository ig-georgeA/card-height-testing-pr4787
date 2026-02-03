import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-social-2',
  imports: [IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective],
  templateUrl: './social-2.component.html',
  styleUrls: ['./social-2.component.scss']
})
export class Social2Component {}
