import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-media-column',
  imports: [IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent],
  templateUrl: './media-column.component.html',
  styleUrls: ['./media-column.component.scss']
})
export class MediaColumnComponent {}
