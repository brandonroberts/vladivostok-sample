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
var router_outlet_map_1 = require('../router_outlet_map');
var router_state_1 = require('../router_state');
var RouterOutlet = (function () {
    function RouterOutlet(parentOutletMap, location, name) {
        this.location = location;
        parentOutletMap.registerOutlet(name ? name : router_state_1.PRIMARY_OUTLET, this);
    }
    Object.defineProperty(RouterOutlet.prototype, "isActivated", {
        get: function () { return !!this.activated; },
        enumerable: true,
        configurable: true
    });
    RouterOutlet.prototype.deactivate = function () {
        if (this.activated) {
            this.activated.destroy();
            this.activated = null;
        }
    };
    RouterOutlet.prototype.activate = function (factory, providers, outletMap) {
        this.outletMap = outletMap;
        var inj = core_1.ReflectiveInjector.fromResolvedProviders(providers, this.location.parentInjector);
        this.activated = this.location.createComponent(factory, this.location.length, inj, []);
    };
    RouterOutlet = __decorate([
        core_1.Directive({ selector: 'router-outlet' }),
        __param(2, core_1.Attribute('name')), 
        __metadata('design:paramtypes', [router_outlet_map_1.RouterOutletMap, core_1.ViewContainerRef, String])
    ], RouterOutlet);
    return RouterOutlet;
}());
exports.RouterOutlet = RouterOutlet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL3JvdXRlcl9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFxSSxlQUFlLENBQUMsQ0FBQTtBQUNySixrQ0FBOEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNyRCw2QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUcvQztJQUlFLHNCQUFZLGVBQStCLEVBQVUsUUFBeUIsRUFDL0MsSUFBVztRQURXLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBRTVFLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyw2QkFBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxzQkFBSSxxQ0FBVzthQUFmLGNBQTZCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXZELGlDQUFVLEdBQVY7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLE9BQThCLEVBQUUsU0FBdUMsRUFDdkUsU0FBMEI7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxHQUFHLEdBQUcseUJBQWtCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUF4Qkg7UUFBQyxnQkFBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLGVBQWUsRUFBQyxDQUFDO21CQU14QixnQkFBUyxDQUFDLE1BQU0sQ0FBQzs7b0JBTk87SUF5QnZDLG1CQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxvQkFBWSxlQXdCeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBBdHRyaWJ1dGUsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeSwgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXIsIFJlZmxlY3RpdmVJbmplY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlck91dGxldE1hcH0gZnJvbSAnLi4vcm91dGVyX291dGxldF9tYXAnO1xuaW1wb3J0IHtQUklNQVJZX09VVExFVH0gZnJvbSAnLi4vcm91dGVyX3N0YXRlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdyb3V0ZXItb3V0bGV0J30pXG5leHBvcnQgY2xhc3MgUm91dGVyT3V0bGV0IHtcbiAgcHJpdmF0ZSBhY3RpdmF0ZWQ6Q29tcG9uZW50UmVmPGFueT58bnVsbDtcbiAgcHVibGljIG91dGxldE1hcDpSb3V0ZXJPdXRsZXRNYXA7XG5cbiAgY29uc3RydWN0b3IocGFyZW50T3V0bGV0TWFwOlJvdXRlck91dGxldE1hcCwgcHJpdmF0ZSBsb2NhdGlvbjpWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBAQXR0cmlidXRlKCduYW1lJykgbmFtZTpzdHJpbmcpIHtcbiAgICBwYXJlbnRPdXRsZXRNYXAucmVnaXN0ZXJPdXRsZXQobmFtZSA/IG5hbWUgOiBQUklNQVJZX09VVExFVCwgdGhpcyk7XG4gIH1cblxuICBnZXQgaXNBY3RpdmF0ZWQoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuYWN0aXZhdGVkOyB9XG4gIFxuICBkZWFjdGl2YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2YXRlZCkge1xuICAgICAgdGhpcy5hY3RpdmF0ZWQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2YXRlKGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8YW55PiwgcHJvdmlkZXJzOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcltdLFxuICAgICAgICAgICBvdXRsZXRNYXA6IFJvdXRlck91dGxldE1hcCk6IHZvaWQge1xuICAgIHRoaXMub3V0bGV0TWFwID0gb3V0bGV0TWFwO1xuICAgIGxldCBpbmogPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKHByb3ZpZGVycywgdGhpcy5sb2NhdGlvbi5wYXJlbnRJbmplY3Rvcik7XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSB0aGlzLmxvY2F0aW9uLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5LCB0aGlzLmxvY2F0aW9uLmxlbmd0aCwgaW5qLCBbXSk7XG4gIH1cbn1cbiJdfQ==