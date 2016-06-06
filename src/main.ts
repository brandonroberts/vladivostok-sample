//main entry point
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {bootstrap} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {CanDeactivateCrisisDetail} from './crisis-center/crisis-detail.guard';
import {DialogService} from './dialog.service';
import {provide,
        ComponentResolver,
        SystemJsComponentResolver} from '@angular/core';
import {RuntimeCompiler} from '@angular/compiler';

bootstrap(AppComponent, [
  provideRouter(routes),
  DialogService,
  CanDeactivateCrisisDetail,
  {
    provide: ComponentResolver,
    useFactory: (compiler) => new SystemJsComponentResolver(compiler),
    deps: [RuntimeCompiler]
  }
])
.catch(err => console.error(err));
