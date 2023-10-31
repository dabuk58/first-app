import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { map } from "rxjs";
import { PostsService } from "../posts.service";


export const postsResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, postsService: PostsService = inject(PostsService)) => {
    return postsService.fetchPosts();
}