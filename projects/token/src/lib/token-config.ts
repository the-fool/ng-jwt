import { InjectionToken } from '@angular/core';

export interface TokenConfig {
  authServiceUrl: string;
}

export const TokenConfigService = new InjectionToken<TokenConfig>('TokenConfig');
