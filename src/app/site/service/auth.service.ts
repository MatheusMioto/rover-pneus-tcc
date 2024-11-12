import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(this.checkLoggedIn());

    isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) {}

  private checkLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  login(email: string) {
    localStorage.setItem('loggedInUser', email);
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.loggedIn.next(false);

    this.router.navigate(['/']).then(() => {
        location.reload();
    });
  }
}
