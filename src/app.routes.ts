import { RouteConfig } from '@angular/router';

import { CrisisCenterRoutes } from './crisis-center/crisis-center.routes';
import { HeroesRoutes } from './heroes/heroes.routes';

export const routes: RouteConfig = [
  CrisisCenterRoutes.CRISIS_CENTER,
  HeroesRoutes.HERO_LIST,
  HeroesRoutes.HERO_DETAIL
];
