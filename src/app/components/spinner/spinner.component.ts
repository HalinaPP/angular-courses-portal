import { LoadingService } from '../../services/loading.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnDestroy {

  public isLoading = false;
  public loadingSub: Subscription;

  constructor(private loadingService: LoadingService) {
    this.loadingSub = this.loadingService.get().subscribe((item: boolean) => {
        this.isLoading = item;
    })
  }

  public ngOnDestroy(): void {
    this.loadingSub.unsubscribe();
  }
}
