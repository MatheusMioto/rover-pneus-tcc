import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './site/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./site/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'pages', loadChildren: () => import('./site/components/pages/pages.module').then(m => m.PagesModule) },

                ]
            },
            { path: 'register', loadChildren: () => import('./site/components/auth/register/register.module').then(m => m.RegisterModule) },
            { path: 'login', loadChildren: () => import('./site/components/auth/login/login.module').then(m => m.LoginModule) },
            { path: 'landing', loadChildren: () => import('./site/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
