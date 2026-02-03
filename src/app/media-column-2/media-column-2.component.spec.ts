import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';
import { MediaColumn2Component } from './media-column-2.component';

describe('MediaColumn2Component', () => {
  let component: MediaColumn2Component;
  let fixture: ComponentFixture<MediaColumn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaColumn2Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaColumn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
