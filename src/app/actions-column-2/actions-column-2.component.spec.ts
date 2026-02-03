import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { ActionsColumn2Component } from './actions-column-2.component';

describe('ActionsColumn2Component', () => {
  let component: ActionsColumn2Component;
  let fixture: ComponentFixture<ActionsColumn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsColumn2Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsColumn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
