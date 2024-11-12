import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Venda',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['/pages/venda']
                    },
                    {
                        label: 'Pagamento',
                        icon: 'pi pi-fw pi-wallet',
                        routerLink: ['/pages/pagamento']
                    },
                ]
            },
        ];
    }
}
