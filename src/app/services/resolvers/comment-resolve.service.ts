import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { CommentsService } from "../comments.service";
import { inject } from "@angular/core";
import { map } from "rxjs";


export const commentResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, commentService: CommentsService = inject(CommentsService)) => {
    const postId = +route.params['postId'];

    return commentService.fetchComments(postId)
        .pipe(map(
            comments => comments.slice(0,3)
            )
        );
}