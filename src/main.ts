//main entry point
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {PlatformLocation} from '@angular/common';
import {BrowserPlatformLocation} from '@angular/platform-browser';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideRouter} from '@angular/router';
import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {CanDeactivateCrisisDetail} from './crisis-center/crisis-detail.guard';
import {DialogService} from './dialog.service';

bootstrap(AppComponent, [
  provideRouter(routes),
  {provide: PlatformLocation, useClass: BrowserPlatformLocation},
  DialogService,
  CanDeactivateCrisisDetail
])
.catch(err => console.error(err));
