import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';

import { CrisisDetailComponent } from './crisis-detail.component';

@Injectable()
export class CrisisDetailGuard implements CanDeactivate<CrisisDetailComponent> {

  canDeactivate(component: CrisisDetailComponent): Observable<boolean> | boolean {
    return component.canDeactivate();
  }
}
