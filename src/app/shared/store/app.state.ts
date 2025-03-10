import {themeReducer} from '../../core/store/settings-store/settings.reducers';
import {SettingsState} from '../../core/store/settings-store/settings.state';


export interface AppState {
  themeState: SettingsState;
}

export const appReducer = {
  theme: themeReducer,
};
