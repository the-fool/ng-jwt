import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenConfigService, TokenConfig } from './token-config';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(@Inject(TokenConfigService) private config: TokenConfig) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        window.location.replace(this.url);
      }

      return throwError(err);
    }));
  }

  get url() {
    return `${this.config.authServiceUrl}?rdr=${location.origin}/token`;
  }
}
