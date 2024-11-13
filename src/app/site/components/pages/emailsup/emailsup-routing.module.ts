import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailSupComponent } from './emailsup.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EmailSupComponent }
    ])],
    exports: [RouterModule]
})
export class EmailSupRoutingModule { }
