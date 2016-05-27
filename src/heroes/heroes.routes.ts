import { HeroListComponent }     from './hero-list.component';
import { HeroDetailComponent }   from './hero-detail.component';

export const HeroesRoutes = {
  HERO_LIST: {path: '/heroes',  component: HeroListComponent},
  HERO_DETAIL: {path: '/hero/:id', component: HeroDetailComponent}
};
