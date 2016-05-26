import { Tree, TreeNode } from './utils/tree';
import { UrlSegment } from './url_tree';
import { Observable } from 'rxjs/Observable';
import { ComponentFactory, Type } from '@angular/core';
export declare type Params = {
    [key: string]: string;
};
export declare const PRIMARY_OUTLET: string;
export declare class RouterState extends Tree<ActivatedRoute> {
    queryParams: Observable<Params>;
    fragment: Observable<string>;
    constructor(root: TreeNode<ActivatedRoute>, queryParams: Observable<Params>, fragment: Observable<string>);
}
export declare function createEmptyState(rootComponent: Type): RouterState;
export declare class ActivatedRoute {
    urlSegments: Observable<UrlSegment[]>;
    params: Observable<Params>;
    outlet: string;
    component: Type;
    factory: ComponentFactory<any>;
    constructor(urlSegments: Observable<UrlSegment[]>, params: Observable<Params>, outlet: string, component: Type, factory: ComponentFactory<any>);
}
