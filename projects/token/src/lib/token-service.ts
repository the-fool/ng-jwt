import { Injectable } from '@angular/core';

const KEY = 'token';

interface Storage {
  getItem: (key: string) => string;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}

@Injectable()
export class TokenService {
  storage: Storage = localStorage;

  getToken() {
    return this.storage.getItem(KEY);
  }

  setToken(token: string) {
    this.storage.setItem(KEY, token);
  }

  clearToken() {
    this.storage.removeItem(KEY);
  }
}
