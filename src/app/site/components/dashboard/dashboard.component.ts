import { PhotoService } from './../../service/photo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { Subscription} from 'rxjs';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    templateUrl: './dashboard.component.html',
    selector: 'dashboard.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class DashboardComponent implements OnInit, OnDestroy {

    images: any[] | undefined;

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    photosService!: PhotoService

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
