import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular';
import { Social2Component } from './social-2.component';

describe('Social2Component', () => {
  let component: Social2Component;
  let fixture: ComponentFixture<Social2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Social2Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxIconButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Social2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
