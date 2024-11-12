import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoComponent } from './pagamento.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        DropdownModule,
        ButtonModule,
        InputTextModule,
        ReactiveFormsModule,
        PagamentoRoutingModule
    ],
    declarations: [PagamentoComponent]
})
export class PagamentoModule { }
