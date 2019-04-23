import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { TokenService } from './token-service';

@Injectable()
export class TokenGuard implements CanActivate {

  constructor(private tokenService: TokenService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const token = route.queryParams['token'];

    this.tokenService.setToken(token);

    window.location.replace(location.origin);

    return false;
  }
}
