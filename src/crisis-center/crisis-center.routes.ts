import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisCenterComponent } from './crisis-center.component';

export const CrisisCenterRoutes = {
  CRISIS_CENTER: {
    path: '/crisis-center',
    component: CrisisCenterComponent,
    index: true,
    children: [
      { path: '/', component: CrisisListComponent, index: true },
      { path: '/:id', component: CrisisDetailComponent }
    ]
  }
};
