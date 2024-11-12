import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagamentoComponent } from './pagamento.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PagamentoComponent }
    ])],
    exports: [RouterModule]
})
export class PagamentoRoutingModule { }