import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { CardDefaultComponent } from './card-default.component';

describe('CardDefaultComponent', () => {
  let component: CardDefaultComponent;
  let fixture: ComponentFixture<CardDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDefaultComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
