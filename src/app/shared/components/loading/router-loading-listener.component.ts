// shared/components/loading/router-loading-listener.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { LoadingComponent } from './loading.component';

@Component({
  selector: 'app-router-loading-listener',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  template: `<app-loading *ngIf="loading"></app-loading>`
})
export class RouterLoadingListenerComponent implements OnDestroy {
  loading = false;
  private sub: Subscription;

  constructor(private router: Router, private loadingService: LoadingService) {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        this.loadingService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
        this.loadingService.hide();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
