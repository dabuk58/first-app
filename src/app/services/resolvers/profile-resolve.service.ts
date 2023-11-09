import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../auth.service";


export const profileResolver: ResolveFn<unknown> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, authService: AuthService = inject(AuthService)) => {
   
}