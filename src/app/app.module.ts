import { NgModule } from '@angular/core';
import {
    HashLocationStrategy,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './site/components/notfound/notfound.component';
import { ProductService } from './site/service/product.service';
import { PhotoService } from './site/service/photo.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BrowserModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        PhotoService,
        ProductService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
