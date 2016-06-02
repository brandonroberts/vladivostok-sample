//main entry point
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ComponentResolver, ApplicationRef} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserPlatformLocation} from '@angular/platform-browser';
import {provideRouter, RouteConfig} from '@angular/router';
import {routes} from './app.routes';

bootstrap(AppComponent, [
  provideRouter(routes)
])
.catch(err => console.error(err));
