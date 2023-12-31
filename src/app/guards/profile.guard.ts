import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const profileGuard: CanActivateFn = (route, state, authService: AuthService = inject(AuthService)) => {
    return true;
};
