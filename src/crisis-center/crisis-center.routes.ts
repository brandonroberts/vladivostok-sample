import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisCenterComponent } from './crisis-center.component';

export const CrisisCenterRoutes = {
  path: '/crisis-center',
  component: CrisisCenterComponent,
  children: [
    {path: '/home',    component: CrisisListComponent},
    {path: '/center/:id', component: CrisisDetailComponent}
  ]
};
