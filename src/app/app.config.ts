import { ApplicationConfig, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {provideNgxMask} from 'ngx-mask'; // Boa prática para futuras chamadas de API

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideNgxMask(),
  ],
};
