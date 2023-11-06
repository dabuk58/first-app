import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService, UserInfo } from "../auth.service";


export const profileResolver: ResolveFn<UserInfo> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, authService: AuthService = inject(AuthService)) => {
    return authService.loadUserProfile();
}