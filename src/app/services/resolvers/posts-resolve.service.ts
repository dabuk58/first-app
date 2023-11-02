import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { PostsService } from "../posts.service";
import { Post } from "src/app/posts/models/post.model";


export const postsResolver: ResolveFn<Post[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, postsService: PostsService = inject(PostsService)) => {
    return postsService.fetchPosts();
}