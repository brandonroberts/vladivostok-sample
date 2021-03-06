import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailGuard } from './crisis-detail.guard';

export const CrisisCenterRoutes = [
  {
    path: '/crisis-center',
    component: CrisisCenterComponent,
    children: [
      { path: '/', component: CrisisListComponent, index: true },
      { path: '/:id', component: CrisisDetailComponent, canDeactivate: [CrisisDetailGuard] }
    ]
  }
];
