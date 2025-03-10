import { inject, Injectable } from '@angular/core';
import { SettingsService } from '../../services/helper/settings.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  themeStart,
  themeSuccess,
} from './settings.actions';
import { map } from 'rxjs';

@Injectable()
export class SettingsEffects {
  private readonly _settingsService: SettingsService = inject(SettingsService);
  private readonly _actions$: Actions = inject(Actions);

  changeTheme$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(themeStart),
      map(action => {
        this._settingsService.theme = action.theme;
        return themeSuccess({ theme: action.theme });
      })
    );
  });
}
