import { Router } from '../router';
export declare class RouterLink {
    private router;
    target: string;
    private commands;
    private absoluteUrl;
    href: string;
    constructor(router: Router);
    routerLink: any[] | string;
    onClick(): boolean;
    private updateTargetUrlAndHref();
}
