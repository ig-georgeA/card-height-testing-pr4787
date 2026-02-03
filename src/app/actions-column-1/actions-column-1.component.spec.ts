import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { ActionsColumn1Component } from './actions-column-1.component';

describe('ActionsColumn1Component', () => {
  let component: ActionsColumn1Component;
  let fixture: ComponentFixture<ActionsColumn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsColumn1Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsColumn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
