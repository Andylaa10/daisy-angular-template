import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection, isDevMode,
} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {SettingsEffects} from './core/store/settings-store/settings.effects';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {appReducer} from './shared/store/app.state';
import {provideStore} from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    provideAnimationsAsync(),
    provideStore(appReducer),
    provideEffects(SettingsEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
],
};
