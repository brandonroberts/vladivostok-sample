//main entry point
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CrisisDetailGuard } from './crisis-center/crisis-detail.guard';
import { DialogService } from './dialog.service';


bootstrap(AppComponent, [
  provideRouter(routes),
      DialogService,
    CrisisDetailGuard
])
.catch(err => console.error(err));
