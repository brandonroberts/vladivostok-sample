"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tree_1 = require('./utils/tree');
var collection_1 = require('./utils/collection');
var UrlTree = (function (_super) {
    __extends(UrlTree, _super);
    function UrlTree(root, queryParameters, fragment) {
        _super.call(this, root);
        this.queryParameters = queryParameters;
        this.fragment = fragment;
    }
    return UrlTree;
}(tree_1.Tree));
exports.UrlTree = UrlTree;
var UrlSegment = (function () {
    function UrlSegment(path, parameters) {
        this.path = path;
        this.parameters = parameters;
    }
    UrlSegment.prototype.toString = function () {
        var params = [];
        for (var prop in this.parameters) {
            if (this.parameters.hasOwnProperty(prop)) {
                params.push(prop + "=" + this.parameters[prop]);
            }
        }
        var paramsString = params.length > 0 ? "(" + params.join(',') + ")" : '';
        return "" + this.path + paramsString;
    };
    return UrlSegment;
}());
exports.UrlSegment = UrlSegment;
function equalUrlSegments(a, b) {
    if (a.length !== b.length)
        return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i].path !== b[i].path)
            return false;
        if (!collection_1.shallowEqual(a[i].parameters, b[i].parameters))
            return false;
    }
    return true;
}
exports.equalUrlSegments = equalUrlSegments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX3RyZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXJsX3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQStCLGNBQWMsQ0FBQyxDQUFBO0FBQzlDLDJCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBS2xEO0lBQTZCLDJCQUFnQjtJQUMzQyxpQkFBWSxJQUEwQixFQUFTLGVBQXdDLEVBQVMsUUFBdUI7UUFDckgsa0JBQU0sSUFBSSxDQUFDLENBQUM7UUFEaUMsb0JBQWUsR0FBZixlQUFlLENBQXlCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtJQUV2SCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFKRCxDQUE2QixXQUFJLEdBSWhDO0FBSlksZUFBTyxVQUluQixDQUFBO0FBRUQ7SUFDRSxvQkFBbUIsSUFBWSxFQUFTLFVBQW1DO1FBQXhELFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtJQUFHLENBQUM7SUFFL0UsNkJBQVEsR0FBUjtRQUNFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUksSUFBSSxTQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBRyxHQUFHLEVBQUUsQ0FBQztRQUN0RSxNQUFNLENBQUMsS0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQWMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGtCQUFVLGFBYXRCLENBQUE7QUFFRCwwQkFBaUMsQ0FBZSxFQUFFLENBQWU7SUFDL0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMseUJBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDcEUsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBUGUsd0JBQWdCLG1CQU8vQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZSwgVHJlZU5vZGUgfSBmcm9tICcuL3V0aWxzL3RyZWUnO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsIH0gZnJvbSAnLi91dGlscy9jb2xsZWN0aW9uJztcblxuLyoqXG4gKiBBIFVSTCBpbiB0aGUgdHJlZSBmb3JtLlxuICovXG5leHBvcnQgY2xhc3MgVXJsVHJlZSBleHRlbmRzIFRyZWU8VXJsU2VnbWVudD4ge1xuICBjb25zdHJ1Y3Rvcihyb290OiBUcmVlTm9kZTxVcmxTZWdtZW50PiwgcHVibGljIHF1ZXJ5UGFyYW1ldGVyczoge1trZXk6IHN0cmluZ106IHN0cmluZ30sIHB1YmxpYyBmcmFnbWVudDogc3RyaW5nIHwgbnVsbCkge1xuICAgIHN1cGVyKHJvb3QpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcmxTZWdtZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHBhdGg6IHN0cmluZywgcHVibGljIHBhcmFtZXRlcnM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KSB7fVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGxldCBwYXJhbXMgPSBbXTtcbiAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMucGFyYW1ldGVycykge1xuICAgICAgaWYgKHRoaXMucGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBwYXJhbXMucHVzaChgJHtwcm9wfT0ke3RoaXMucGFyYW1ldGVyc1twcm9wXX1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmxlbmd0aCA+IDAgPyBgKCR7cGFyYW1zLmpvaW4oJywnKX0pYCA6ICcnO1xuICAgIHJldHVybiBgJHt0aGlzLnBhdGh9JHtwYXJhbXNTdHJpbmd9YDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxVcmxTZWdtZW50cyhhOiBVcmxTZWdtZW50W10sIGI6IFVybFNlZ21lbnRbXSk6IGJvb2xlYW4ge1xuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhW2ldLnBhdGggIT09IGJbaV0ucGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghc2hhbGxvd0VxdWFsKGFbaV0ucGFyYW1ldGVycywgYltpXS5wYXJhbWV0ZXJzKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIl19