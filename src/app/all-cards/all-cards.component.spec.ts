import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxDividerDirective } from 'igniteui-angular';
import { AllCardsComponent } from './all-cards.component';

describe('AllCardsComponent', () => {
  let component: AllCardsComponent;
  let fixture: ComponentFixture<AllCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCardsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxDividerDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
