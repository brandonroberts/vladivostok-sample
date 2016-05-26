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
var core_1 = require('@angular/core');
var router_1 = require('../router');
var RouterLink = (function () {
    function RouterLink(router) {
        this.router = router;
        this.commands = null;
        this.absoluteUrl = null;
    }
    Object.defineProperty(RouterLink.prototype, "routerLink", {
        set: function (data) {
            if (Array.isArray(data)) {
                this.commands = data;
                this.absoluteUrl = null;
            }
            else {
                this.commands = null;
                this.absoluteUrl = data;
            }
            this.updateTargetUrlAndHref();
        },
        enumerable: true,
        configurable: true
    });
    RouterLink.prototype.onClick = function () {
        if (!(typeof this.target === "string") || this.target == '_self') {
            this.router.navigateByUrl(this.absoluteUrl);
            return false;
        }
        return true;
    };
    RouterLink.prototype.updateTargetUrlAndHref = function () {
        if (this.absoluteUrl) {
            this.href = this.absoluteUrl;
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
        __metadata('design:paramtypes', [router_1.Router])
    ], RouterLink);
    return RouterLink;
}());
exports.RouterLink = RouterLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX2xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9yb3V0ZXJfbGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBS08sZUFBZSxDQUFDLENBQUE7QUFDdkIsdUJBQXFCLFdBQVcsQ0FBQyxDQUFBO0FBNEJqQztJQVFFLG9CQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU4xQixhQUFRLEdBQWUsSUFBSSxDQUFDO1FBQzVCLGdCQUFXLEdBQWdCLElBQUksQ0FBQztJQUtILENBQUM7SUFHdEMsc0JBQUksa0NBQVU7YUFBZCxVQUFlLElBQW9CO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMxQixDQUFDO1lBQ0QsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFJRCw0QkFBTyxHQUFQO1FBRUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTywyQ0FBc0IsR0FBOUI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFwQ0Q7UUFBQyxZQUFLLEVBQUU7OzhDQUFBO0lBS1I7UUFBQyxrQkFBVyxFQUFFOzs0Q0FBQTtJQUlkO1FBQUMsWUFBSyxFQUFFOzs7Z0RBQUE7SUFhUjtRQUFDLG1CQUFZLENBQUMsT0FBTyxDQUFDOzs7OzZDQUFBO0lBeEJ4QjtRQUFDLGdCQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsY0FBYyxFQUFDLENBQUM7O2tCQUFBO0lBdUN0QyxpQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksa0JBQVUsYUFzQ3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcic7XG5cbi8qKlxuICogVGhlIFJvdXRlckxpbmsgZGlyZWN0aXZlIGxldHMgeW91IGxpbmsgdG8gc3BlY2lmaWMgcGFydHMgb2YgeW91ciBhcHAuXG4gKlxuICogQ29uc2lkZXIgdGhlIGZvbGxvd2luZyByb3V0ZSBjb25maWd1cmF0aW9uOlxuXG4gKiBgYGBcbiAqIFt7IG5hbWU6ICd1c2VyJywgcGF0aDogJy91c2VyJywgY29tcG9uZW50OiBVc2VyQ21wIH1dXG4gKiBgYGBcbiAqXG4gKiBXaGVuIGxpbmtpbmcgdG8gdGhpcyBgVXNlcmAgcm91dGUsIHlvdSBjYW4gd3JpdGU6XG4gKlxuICogYGBgXG4gKiA8YSBbcm91dGVyTGlua109XCJbJy91c2VyJ11cIj5saW5rIHRvIHVzZXIgY29tcG9uZW50PC9hPlxuICogYGBgXG4gKlxuICogUm91dGVyTGluayBleHBlY3RzIHRoZSB2YWx1ZSB0byBiZSBhbiBhcnJheSBvZiBwYXRoIHNlZ21lbnRzLCBmb2xsb3dlZCBieSB0aGUgcGFyYW1zXG4gKiBmb3IgdGhhdCBsZXZlbCBvZiByb3V0aW5nLiBGb3IgaW5zdGFuY2UgYFsnL3RlYW0nLCB7dGVhbUlkOiAxfSwgJ3VzZXInLCB7dXNlcklkOiAyfV1gXG4gKiBtZWFucyB0aGF0IHdlIHdhbnQgdG8gZ2VuZXJhdGUgYSBsaW5rIHRvIGAvdGVhbTt0ZWFtSWQ9MS91c2VyO3VzZXJJZD0yYC5cbiAqXG4gKiBUaGUgZmlyc3Qgc2VnbWVudCBuYW1lIGNhbiBiZSBwcmVwZW5kZWQgd2l0aCBgL2AsIGAuL2AsIG9yIGAuLi9gLlxuICogSWYgdGhlIHNlZ21lbnQgYmVnaW5zIHdpdGggYC9gLCB0aGUgcm91dGVyIHdpbGwgbG9vayB1cCB0aGUgcm91dGUgZnJvbSB0aGUgcm9vdCBvZiB0aGUgYXBwLlxuICogSWYgdGhlIHNlZ21lbnQgYmVnaW5zIHdpdGggYC4vYCwgb3IgZG9lc24ndCBiZWdpbiB3aXRoIGEgc2xhc2gsIHRoZSByb3V0ZXIgd2lsbFxuICogaW5zdGVhZCBsb29rIGluIHRoZSBjdXJyZW50IGNvbXBvbmVudCdzIGNoaWxkcmVuIGZvciB0aGUgcm91dGUuXG4gKiBBbmQgaWYgdGhlIHNlZ21lbnQgYmVnaW5zIHdpdGggYC4uL2AsIHRoZSByb3V0ZXIgd2lsbCBnbyB1cCBvbmUgbGV2ZWwuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3JvdXRlckxpbmtdJ30pXG5leHBvcnQgY2xhc3MgUm91dGVyTGluayB7XG4gIEBJbnB1dCgpIHRhcmdldDogc3RyaW5nO1xuICBwcml2YXRlIGNvbW1hbmRzOiBhbnlbXXxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBhYnNvbHV0ZVVybDogc3RyaW5nfG51bGwgPSBudWxsO1xuXG4gIC8vIHRoZSB1cmwgZGlzcGxheWVkIG9uIHRoZSBhbmNob3IgZWxlbWVudC5cbiAgQEhvc3RCaW5kaW5nKCkgaHJlZjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgQElucHV0KClcbiAgc2V0IHJvdXRlckxpbmsoZGF0YTogYW55W10gfCBzdHJpbmcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgdGhpcy5jb21tYW5kcyA9IGRhdGE7XG4gICAgICB0aGlzLmFic29sdXRlVXJsID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21tYW5kcyA9IG51bGw7XG4gICAgICB0aGlzLmFic29sdXRlVXJsID0gZGF0YTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVUYXJnZXRVcmxBbmRIcmVmKCk7XG4gIH1cblxuXG4gIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICBvbkNsaWNrKCk6IGJvb2xlYW4ge1xuICAgIC8vIElmIG5vIHRhcmdldCwgb3IgaWYgdGFyZ2V0IGlzIF9zZWxmLCBwcmV2ZW50IGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvclxuICAgIGlmICghKHR5cGVvZiB0aGlzLnRhcmdldCA9PT0gXCJzdHJpbmdcIikgfHwgdGhpcy50YXJnZXQgPT0gJ19zZWxmJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmFic29sdXRlVXJsKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRhcmdldFVybEFuZEhyZWYoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWJzb2x1dGVVcmwpIHtcbiAgICAgIHRoaXMuaHJlZiA9IHRoaXMuYWJzb2x1dGVVcmw7XG4gICAgfVxuICB9XG59XG4iXX0=