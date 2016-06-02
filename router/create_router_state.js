"use strict";
var router_state_1 = require('./router_state');
var tree_1 = require('./utils/tree');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
function createRouterState(curr, prevState) {
    var root = createNode(curr._root, prevState ? prevState._root : undefined);
    var queryParams = prevState ? prevState.queryParams : new BehaviorSubject_1.BehaviorSubject(curr.queryParams);
    var fragment = prevState ? prevState.fragment : new BehaviorSubject_1.BehaviorSubject(curr.fragment);
    return new router_state_1.RouterState(root, queryParams, fragment, curr);
}
exports.createRouterState = createRouterState;
function createNode(curr, prevState) {
    if (prevState && equalRouteSnapshots(prevState.value.snapshot, curr.value)) {
        var value = prevState.value;
        value.snapshot = curr.value;
        var children = createOrReuseChildren(curr, prevState);
        return new tree_1.TreeNode(value, children);
    }
    else {
        var value = createActivatedRoute(curr.value);
        var children = curr.children.map(function (c) { return createNode(c); });
        return new tree_1.TreeNode(value, children);
    }
}
function createOrReuseChildren(curr, prevState) {
    return curr.children.map(function (child) {
        var index = prevState.children.findIndex(function (p) { return equalRouteSnapshots(p.value.snapshot, child.value); });
        if (index >= 0) {
            return createNode(child, prevState.children[index]);
        }
        else {
            return createNode(child);
        }
    });
}
function createActivatedRoute(c) {
    return new router_state_1.ActivatedRoute(new BehaviorSubject_1.BehaviorSubject(c.urlSegments), new BehaviorSubject_1.BehaviorSubject(c.params), c.outlet, c.component, c);
}
function equalRouteSnapshots(a, b) {
    return a._routeConfig === b._routeConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlX3JvdXRlcl9zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmVhdGVfcm91dGVyX3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBeUYsZ0JBQWdCLENBQUMsQ0FBQTtBQUMxRyxxQkFBeUIsY0FBYyxDQUFDLENBQUE7QUFDeEMsZ0NBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFFdkQsMkJBQWtDLElBQXlCLEVBQUUsU0FBc0I7SUFDakYsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDN0UsSUFBTSxXQUFXLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RixJQUFNLFFBQVEsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLGlDQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sQ0FBQyxJQUFJLDBCQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUxlLHlCQUFpQixvQkFLaEMsQ0FBQTtBQUVELG9CQUFvQixJQUFxQyxFQUFFLFNBQW1DO0lBQzVGLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDOUIsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTVCLElBQU0sUUFBUSxHQUFHLHFCQUFxQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSxlQUFRLENBQWlCLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUV2RCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFNLEtBQUssR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLElBQUksZUFBUSxDQUFpQixLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztBQUNILENBQUM7QUFFRCwrQkFBK0IsSUFBcUMsRUFBRSxTQUFrQztJQUN0RyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO1FBQzVCLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7UUFDcEcsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsOEJBQThCLENBQXdCO0lBQ3BELE1BQU0sQ0FBQyxJQUFJLDZCQUFjLENBQUMsSUFBSSxpQ0FBZSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLGlDQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6SCxDQUFDO0FBRUQsNkJBQTZCLENBQXlCLEVBQUUsQ0FBeUI7SUFDL0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGUsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnLi9yb3V0ZXJfc3RhdGUnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuL3V0aWxzL3RyZWUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm91dGVyU3RhdGUoY3VycjogUm91dGVyU3RhdGVTbmFwc2hvdCwgcHJldlN0YXRlOiBSb3V0ZXJTdGF0ZSk6IFJvdXRlclN0YXRlIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZU5vZGUoY3Vyci5fcm9vdCwgcHJldlN0YXRlID8gcHJldlN0YXRlLl9yb290IDogdW5kZWZpbmVkKTtcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSBwcmV2U3RhdGUgPyBwcmV2U3RhdGUucXVlcnlQYXJhbXMgOiBuZXcgQmVoYXZpb3JTdWJqZWN0KGN1cnIucXVlcnlQYXJhbXMpO1xuICBjb25zdCBmcmFnbWVudCA9IHByZXZTdGF0ZSA/IHByZXZTdGF0ZS5mcmFnbWVudCA6IG5ldyBCZWhhdmlvclN1YmplY3QoY3Vyci5mcmFnbWVudCk7XG4gIHJldHVybiBuZXcgUm91dGVyU3RhdGUocm9vdCwgcXVlcnlQYXJhbXMsIGZyYWdtZW50LCBjdXJyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9kZShjdXJyOlRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+LCBwcmV2U3RhdGU/OlRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlPik6VHJlZU5vZGU8QWN0aXZhdGVkUm91dGU+IHtcbiAgaWYgKHByZXZTdGF0ZSAmJiBlcXVhbFJvdXRlU25hcHNob3RzKHByZXZTdGF0ZS52YWx1ZS5zbmFwc2hvdCwgY3Vyci52YWx1ZSkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHByZXZTdGF0ZS52YWx1ZTtcbiAgICB2YWx1ZS5zbmFwc2hvdCA9IGN1cnIudmFsdWU7XG4gICAgXG4gICAgY29uc3QgY2hpbGRyZW4gPSBjcmVhdGVPclJldXNlQ2hpbGRyZW4oY3VyciwgcHJldlN0YXRlKTtcbiAgICByZXR1cm4gbmV3IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlPih2YWx1ZSwgY2hpbGRyZW4pO1xuXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmFsdWUgPSBjcmVhdGVBY3RpdmF0ZWRSb3V0ZShjdXJyLnZhbHVlKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGN1cnIuY2hpbGRyZW4ubWFwKGMgPT4gY3JlYXRlTm9kZShjKSk7XG4gICAgcmV0dXJuIG5ldyBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4odmFsdWUsIGNoaWxkcmVuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVPclJldXNlQ2hpbGRyZW4oY3VycjpUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PiwgcHJldlN0YXRlOlRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlPikge1xuICByZXR1cm4gY3Vyci5jaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcHJldlN0YXRlLmNoaWxkcmVuLmZpbmRJbmRleChwID0+IGVxdWFsUm91dGVTbmFwc2hvdHMocC52YWx1ZS5zbmFwc2hvdCwgY2hpbGQudmFsdWUpKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZU5vZGUoY2hpbGQsIHByZXZTdGF0ZS5jaGlsZHJlbltpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlTm9kZShjaGlsZCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aXZhdGVkUm91dGUoYzpBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gIHJldHVybiBuZXcgQWN0aXZhdGVkUm91dGUobmV3IEJlaGF2aW9yU3ViamVjdChjLnVybFNlZ21lbnRzKSwgbmV3IEJlaGF2aW9yU3ViamVjdChjLnBhcmFtcyksIGMub3V0bGV0LCBjLmNvbXBvbmVudCwgYyk7XG59XG5cbmZ1bmN0aW9uIGVxdWFsUm91dGVTbmFwc2hvdHMoYTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgYjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICByZXR1cm4gYS5fcm91dGVDb25maWcgPT09IGIuX3JvdXRlQ29uZmlnO1xufSJdfQ==