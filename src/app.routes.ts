import { provideRouter, RouterConfig } from '@angular/router';

import { CrisisCenterRoutes } from './crisis-center/crisis-center.routes';
import { CrisisDetailGuard }  from './crisis-center/crisis-detail.guard';
import { HeroesRoutes }       from './heroes/heroes.routes';

const routes: RouterConfig = [
  ...HeroesRoutes,
  ...CrisisCenterRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CrisisDetailGuard
];
