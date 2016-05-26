import { ComponentResolver } from '@angular/core';
import { Location } from '@angular/common';
import { UrlSerializer } from './url_serializer';
import { RouterOutletMap } from './router_outlet_map';
import { RouterState } from './router_state';
import { RouterConfig } from './config';
export declare class Router {
    private rootComponent;
    private resolver;
    private urlSerializer;
    private outletMap;
    private location;
    private currentState;
    private config;
    private locationSubscription;
    constructor(rootComponent: Object, resolver: ComponentResolver, urlSerializer: UrlSerializer, outletMap: RouterOutletMap, location: Location);
    readonly routerState: RouterState;
    navigateByUrl(url: string): void;
    resetConfig(config: RouterConfig): void;
    dispose(): void;
    private setUpLocationChangeListener();
    private navigate(url, pop?);
}
