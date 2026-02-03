import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { CardDefaultComponent } from './card-default/card-default.component';
import { CardDefault2Component } from './card-default-2/card-default-2.component';
import { MediaColumnComponent } from './media-column/media-column.component';
import { MediaColumn2Component } from './media-column-2/media-column-2.component';
import { ActionsColumn1Component } from './actions-column-1/actions-column-1.component';
import { ActionsColumn2Component } from './actions-column-2/actions-column-2.component';
import { SocialComponent } from './social/social.component';
import { Social2Component } from './social-2/social-2.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { CardCroppingComponent } from './card-cropping/card-cropping.component';

export const routes: Routes = [
  { path: '', redirectTo: 'card-default', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'card-default', component: CardDefaultComponent, data: { text: 'Card-Default' } },
  { path: 'card-default-2', component: CardDefault2Component, data: { text: 'Card-Default-2' } },
  { path: 'media-column', component: MediaColumnComponent, data: { text: 'Media-Column' } },
  { path: 'media-column-2', component: MediaColumn2Component, data: { text: 'Media-Column-2' } },
  { path: 'actions-column-1', component: ActionsColumn1Component, data: { text: 'Actions-Column-1' } },
  { path: 'actions-column-2', component: ActionsColumn2Component, data: { text: 'Actions-Column-2' } },
  { path: 'social', component: SocialComponent, data: { text: 'Social' } },
  { path: 'social-2', component: Social2Component, data: { text: 'Social-2' } },
  { path: 'all-cards', component: AllCardsComponent, data: { text: 'All-Cards' } },
  { path: 'card-cropping', component: CardCroppingComponent, data: { text: 'Card-Cropping' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
