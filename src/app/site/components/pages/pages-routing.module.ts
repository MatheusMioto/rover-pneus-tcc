import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'pagamento', loadChildren: () => import('./pagamento/pagamento.module').then(m => m.PagamentoModule) },
        { path: 'suporte', loadChildren: () => import('./suporte/suporte.module').then(m => m.SuporteModule) },
        { path: 'emailsup', loadChildren: () => import('./emailsup/emailsup.module').then(m => m.EmailSupModule) },
        { path: 'venda', loadChildren: () => import('./venda/venda.module').then(m => m.VendaModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
