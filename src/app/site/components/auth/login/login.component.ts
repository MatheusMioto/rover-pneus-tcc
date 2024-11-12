import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/site/service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './Login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    loginData = { email:'', password: ''}
    loginError = false;

    valCheck: string[] = ['remember'];

    password!: string;

    isLoggedIn = false;

    constructor(public layoutService: LayoutService, private router: Router, public authService: AuthService ){ }

    ngOnInit() {
        this.authService.isLoggedIn$.subscribe((loggedInStatus) => {
          this.isLoggedIn = loggedInStatus;
        });
    }

    validarLogin(){

        let users = JSON.parse(localStorage.getItem('users') || '[]');

        if (!this.loginData.email || !this.loginData.password) {
            this.loginError = true;
            return;
          }

        const user = users.find(
            (u: { email: string; password: string }) =>
              u.email === this.loginData.email && u.password === this.loginData.password
          );

          if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user.email));
            this.router.navigate(['/']);
            this.loginError = false;
          } else {
            this.loginError = true;
          }
        }

    }
