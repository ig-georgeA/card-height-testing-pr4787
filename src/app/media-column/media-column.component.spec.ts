import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';
import { MediaColumnComponent } from './media-column.component';

describe('MediaColumnComponent', () => {
  let component: MediaColumnComponent;
  let fixture: ComponentFixture<MediaColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaColumnComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
