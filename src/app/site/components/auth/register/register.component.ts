import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-register',
    templateUrl: './Register.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegisterComponent {

    user = { username: '', email: '', password: '', password1: '', cpf: '', telefone: '', data: '', };
    errorMessage = '';

    valCheck: string[] = ['remember'];

    password!: string;

    constructor(public layoutService: LayoutService) { }

    validarCadastro() {

        if (this.user.password !== this.user.password1) {
            this.errorMessage = 'As senhas não coincidem. Tente novamente.';
            return;
        }

        if (!this.user.username || !this.user.password || !this.user.password1) {
            this.errorMessage = 'Todos os campos devem ser preenchidos.';
            return;
        }

        let users = JSON.parse(localStorage.getItem('users') || '[]');

        const existingEmail = users.find(
            (user: { email: string }) => user.email === this.user.email
        );

        if (existingEmail) {
            this.errorMessage = 'Este email já está registrado.';
            return;
        }

        users.push({
            username: this.user.username,
            password: this.user.password,
            password1: this.user.password1,
            telefone: this.user.telefone,
            email: this.user.email,
            cpf: this.user.cpf,
            data: this.user.data,
        });

        localStorage.setItem('users', JSON.stringify(users));

        this.errorMessage = '';

        alert('Usuário cadastrado com sucesso!');

    }
}
