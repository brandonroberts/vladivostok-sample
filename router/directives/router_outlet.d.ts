import { Injector, ViewContainerRef, ComponentFactory, ResolvedReflectiveProvider } from '@angular/core';
import { RouterOutletMap } from '../router_outlet_map';
export declare class RouterOutlet {
    private location;
    injector: Injector;
    private activated;
    outletMap: RouterOutletMap;
    constructor(parentOutletMap: RouterOutletMap, location: ViewContainerRef, name: string, injector: Injector);
    readonly isActivated: boolean;
    deactivate(): void;
    activate(factory: ComponentFactory<any>, providers: ResolvedReflectiveProvider[], outletMap: RouterOutletMap): void;
}
