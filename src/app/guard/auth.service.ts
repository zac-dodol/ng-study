import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor() {}

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('click');
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logput() {
    this.loggedIn = false;
  }
}
