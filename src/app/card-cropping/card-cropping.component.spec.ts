import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { CardCroppingComponent } from './card-cropping.component';

describe('CardCroppingComponent', () => {
  let component: CardCroppingComponent;
  let fixture: ComponentFixture<CardCroppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCroppingComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCroppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
