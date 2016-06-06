import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DialogService } from '../dialog.service';
import { CrisisDetailComponent } from './crisis-detail.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanDeactivateCrisisDetail implements CanDeactivate<CrisisDetailComponent> {
  constructor(private dialog: DialogService) {}

  canDeactivate(component: CrisisDetailComponent): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!component.crisis || component.crisis.name === component.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialog.confirm('Discard changes?');
  }
}
