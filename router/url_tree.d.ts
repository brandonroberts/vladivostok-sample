import { Tree, TreeNode } from './utils/tree';
export declare class UrlTree extends Tree<UrlSegment> {
    queryParameters: {
        [key: string]: string;
    };
    fragment: string | null;
    constructor(root: TreeNode<UrlSegment>, queryParameters: {
        [key: string]: string;
    }, fragment: string | null);
}
export declare class UrlSegment {
    path: string;
    parameters: {
        [key: string]: string;
    };
    constructor(path: string, parameters: {
        [key: string]: string;
    });
    toString(): string;
}
export declare function equalUrlSegments(a: UrlSegment[], b: UrlSegment[]): boolean;
