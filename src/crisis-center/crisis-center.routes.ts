//import { CrisisDetailComponent } from './crisis-detail.component';
//import { CrisisListComponent }   from './crisis-list.component';
//import { CrisisCenterComponent } from './crisis-center.component';
import { CanDeactivateCrisisDetail } from './crisis-detail.guard';

export const CrisisCenterRoutes = {
  CRISIS_CENTER: {
    path: '/crisis-center',
    component: 'app/crisis-center/crisis-center.component',
    index: true,
    children: [
      { path: '/', component: 'app/crisis-center/crisis-list.component', index: true },
      { path: '/:id', component: 'app/crisis-center/crisis-detail.component', canDeactivate: [CanDeactivateCrisisDetail] }
    ]
  }
};
