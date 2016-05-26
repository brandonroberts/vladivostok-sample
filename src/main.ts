//main entry point
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ComponentResolver, ApplicationRef} from '@angular/core';
import {App} from './app';
import {BrowserPlatformLocation} from '@angular/platform-browser';
import {PathLocationStrategy, LocationStrategy, PlatformLocation, Location} from '@angular/common';
import {UrlSerializer, DefaultUrlSerializer, RouterOutletMap, Router} from '@angular/router';

const ROUTER_PROVIDERS = [
  { provide: LocationStrategy, useClass: PathLocationStrategy },
  { provide: PlatformLocation, useClass: BrowserPlatformLocation },
  Location,
  RouterOutletMap
  {provide: UrlSerializer, useClass: DefaultUrlSerializer},
  {
    provide: Router,
    useFactory: (app, resolver, urlSerializer, outletMap, location) => {
      return new Router(app.componentTypes[0], resolver, urlSerializer, outletMap, location);
    },
    deps: [ApplicationRef, ComponentResolver, UrlSerializer, RouterOutletMap, Location]
  }
];

bootstrap(App, [
  ROUTER_PROVIDERS
])
.catch(err => console.error(err));
