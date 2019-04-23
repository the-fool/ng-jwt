import { NgModule, ModuleWithProviders } from '@angular/core';
import { TokenComponent } from './component';
import { TokenGuard } from './token-guard';
import { TokenService } from './token-service';
import { TokenInterceptor } from './token-interceptor';
import { UnauthorizedInterceptor } from './unauthorized-interceptor';
import { Routing } from './routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TokenConfig, TokenConfigService } from './token-config';

@NgModule({
  declarations: [
    TokenComponent
  ],
  imports: [
    CommonModule,
    Routing
  ]
})
export class TokenModule {
  static forRoot(config: TokenConfig): ModuleWithProviders {
    return {
      ngModule: TokenModule,
      providers: [
        TokenGuard,
        TokenService,
        {
          provide: TokenConfigService,
          useValue: config
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: UnauthorizedInterceptor,
          multi: true
        }
      ]
    };
  }
}
