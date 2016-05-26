import { UrlTree } from './url_tree';
import { RouterState } from './router_state';
import { RouterConfig } from './config';
import { ComponentResolver } from '@angular/core';
export declare function recognize(componentResolver: ComponentResolver, config: RouterConfig, url: UrlTree, existingState: RouterState): Promise<RouterState>;
