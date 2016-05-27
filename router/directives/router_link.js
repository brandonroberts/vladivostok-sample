"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('../router');
var router_state_1 = require('../router_state');
var RouterLink = (function () {
    function RouterLink(router, route) {
        this.router = router;
        this.route = route;
        this.commands = [];
    }
    Object.defineProperty(RouterLink.prototype, "routerLink", {
        set: function (data) {
            if (Array.isArray(data)) {
                this.commands = data;
            }
            else {
                this.commands = [data];
            }
            this.updateTargetUrlAndHref();
        },
        enumerable: true,
        configurable: true
    });
    RouterLink.prototype.onClick = function () {
        if (!(typeof this.target === "string") || this.target == '_self') {
            this.router.navigate(this.commands, { relativeTo: this.route });
            return false;
        }
        return true;
    };
    RouterLink.prototype.updateTargetUrlAndHref = function () {
        var tree = this.router.createUrlTree(this.commands, { relativeTo: this.route });
        if (tree) {
            this.href = this.router.serializeUrl(tree);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RouterLink.prototype, "target", void 0);
    __decorate([
        core_1.HostBinding(), 
        __metadata('design:type', String)
    ], RouterLink.prototype, "href", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], RouterLink.prototype, "routerLink", null);
    __decorate([
        core_1.HostListener("click"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Boolean)
    ], RouterLink.prototype, "onClick", null);
    RouterLink = __decorate([
        core_1.Directive({ selector: '[routerLink]' }),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [router_1.Router, router_state_1.ActivatedRoute])
    ], RouterLink);
    return RouterLink;
}());
exports.RouterLink = RouterLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX2xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9yb3V0ZXJfbGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBTU8sZUFBZSxDQUFDLENBQUE7QUFDdkIsdUJBQXFCLFdBQVcsQ0FBQyxDQUFBO0FBQ2pDLDZCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBNEIvQztJQU9FLG9CQUFvQixNQUFjLEVBQXNCLEtBQXFCO1FBQXpELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBc0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMckUsYUFBUSxHQUFVLEVBQUUsQ0FBQztJQUttRCxDQUFDO0lBR2pGLHNCQUFJLGtDQUFVO2FBQWQsVUFBZSxJQUFvQjtZQUNqQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDdkIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBQ0QsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFJRCw0QkFBTyxHQUFQO1FBRUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sMkNBQXNCLEdBQTlCO1FBQ0UsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUNoRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQWxDRDtRQUFDLFlBQUssRUFBRTs7OENBQUE7SUFJUjtRQUFDLGtCQUFXLEVBQUU7OzRDQUFBO0lBSWQ7UUFBQyxZQUFLLEVBQUU7OztnREFBQTtJQVdSO1FBQUMsbUJBQVksQ0FBQyxPQUFPLENBQUM7Ozs7NkNBQUE7SUFyQnhCO1FBQUMsZ0JBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQzttQkFRQyxlQUFRLEVBQUU7O2tCQVJYO0lBcUN0QyxpQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksa0JBQVUsYUFvQ3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnLi4vcm91dGVyX3N0YXRlJztcblxuLyoqXG4gKiBUaGUgUm91dGVyTGluayBkaXJlY3RpdmUgbGV0cyB5b3UgbGluayB0byBzcGVjaWZpYyBwYXJ0cyBvZiB5b3VyIGFwcC5cbiAqXG4gKiBDb25zaWRlciB0aGUgZm9sbG93aW5nIHJvdXRlIGNvbmZpZ3VyYXRpb246XG5cbiAqIGBgYFxuICogW3sgcGF0aDogJy91c2VyJywgY29tcG9uZW50OiBVc2VyQ21wIH1dXG4gKiBgYGBcbiAqXG4gKiBXaGVuIGxpbmtpbmcgdG8gdGhpcyBgVXNlcmAgcm91dGUsIHlvdSBjYW4gd3JpdGU6XG4gKlxuICogYGBgXG4gKiA8YSBbcm91dGVyTGlua109XCJbJy91c2VyJ11cIj5saW5rIHRvIHVzZXIgY29tcG9uZW50PC9hPlxuICogYGBgXG4gKlxuICogUm91dGVyTGluayBleHBlY3RzIHRoZSB2YWx1ZSB0byBiZSBhbiBhcnJheSBvZiBwYXRoIHNlZ21lbnRzLCBmb2xsb3dlZCBieSB0aGUgcGFyYW1zXG4gKiBmb3IgdGhhdCBsZXZlbCBvZiByb3V0aW5nLiBGb3IgaW5zdGFuY2UgYFsnL3RlYW0nLCB7dGVhbUlkOiAxfSwgJ3VzZXInLCB7dXNlcklkOiAyfV1gXG4gKiBtZWFucyB0aGF0IHdlIHdhbnQgdG8gZ2VuZXJhdGUgYSBsaW5rIHRvIGAvdGVhbTt0ZWFtSWQ9MS91c2VyO3VzZXJJZD0yYC5cbiAqXG4gKiBUaGUgZmlyc3Qgc2VnbWVudCBuYW1lIGNhbiBiZSBwcmVwZW5kZWQgd2l0aCBgL2AsIGAuL2AsIG9yIGAuLi9gLlxuICogSWYgdGhlIHNlZ21lbnQgYmVnaW5zIHdpdGggYC9gLCB0aGUgcm91dGVyIHdpbGwgbG9vayB1cCB0aGUgcm91dGUgZnJvbSB0aGUgcm9vdCBvZiB0aGUgYXBwLlxuICogSWYgdGhlIHNlZ21lbnQgYmVnaW5zIHdpdGggYC4vYCwgb3IgZG9lc24ndCBiZWdpbiB3aXRoIGEgc2xhc2gsIHRoZSByb3V0ZXIgd2lsbFxuICogaW5zdGVhZCBsb29rIGluIHRoZSBjdXJyZW50IGNvbXBvbmVudCdzIGNoaWxkcmVuIGZvciB0aGUgcm91dGUuXG4gKiBBbmQgaWYgdGhlIHNlZ21lbnQgYmVnaW5zIHdpdGggYC4uL2AsIHRoZSByb3V0ZXIgd2lsbCBnbyB1cCBvbmUgbGV2ZWwuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3JvdXRlckxpbmtdJ30pXG5leHBvcnQgY2xhc3MgUm91dGVyTGluayB7XG4gIEBJbnB1dCgpIHRhcmdldDogc3RyaW5nO1xuICBwcml2YXRlIGNvbW1hbmRzOiBhbnlbXSA9IFtdO1xuXG4gIC8vIHRoZSB1cmwgZGlzcGxheWVkIG9uIHRoZSBhbmNob3IgZWxlbWVudC5cbiAgQEhvc3RCaW5kaW5nKCkgaHJlZjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHNldCByb3V0ZXJMaW5rKGRhdGE6IGFueVtdIHwgc3RyaW5nKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHRoaXMuY29tbWFuZHMgPSBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbW1hbmRzID0gW2RhdGFdO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVRhcmdldFVybEFuZEhyZWYoKTtcbiAgfVxuXG5cbiAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gIG9uQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgLy8gSWYgbm8gdGFyZ2V0LCBvciBpZiB0YXJnZXQgaXMgX3NlbGYsIHByZXZlbnQgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yXG4gICAgaWYgKCEodHlwZW9mIHRoaXMudGFyZ2V0ID09PSBcInN0cmluZ1wiKSB8fCB0aGlzLnRhcmdldCA9PSAnX3NlbGYnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSh0aGlzLmNvbW1hbmRzLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVGFyZ2V0VXJsQW5kSHJlZigpOiB2b2lkIHtcbiAgICBjb25zdCB0cmVlID0gdGhpcy5yb3V0ZXIuY3JlYXRlVXJsVHJlZSh0aGlzLmNvbW1hbmRzLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICAgIGlmICh0cmVlKSB7XG4gICAgICB0aGlzLmhyZWYgPSB0aGlzLnJvdXRlci5zZXJpYWxpemVVcmwodHJlZSk7XG4gICAgfVxuICB9XG59XG4iXX0=