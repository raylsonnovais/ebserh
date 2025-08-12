import { Component, OnInit, OnDestroy, AfterViewChecked, ViewChild, ElementRef, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BreadcrumbComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('crumbList') crumbListEl!: ElementRef<HTMLOListElement>;

  public breadcrumbs: Breadcrumb[] = [];
  public hiddenCrumbs: Breadcrumb[] = [];

  public isCollapsed = false;
  public isDropdownOpen = false;

  private routerSubscription!: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
        this.isDropdownOpen = false; // Fecha o dropdown ao navegar
      });
    // Carga inicial
    this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
  }

  ngAfterViewChecked(): void {
    this.checkCollapse();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Fecha o dropdown se clicar fora do componente
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  // Verifica se precisa encolher o breadcrumb ao mudar tamanho da janela
  @HostListener('window:resize')
  onWindowResize(): void {
    this.checkCollapse();
  }

  private checkCollapse(): void {
    if (!this.crumbListEl) return;
    const listEl = this.crumbListEl.nativeElement;
    // O +5 é uma tolerância para o ícone de expandir
    const shouldCollapse = listEl.scrollWidth > listEl.offsetWidth + 5;
    if (shouldCollapse !== this.isCollapsed) {
      this.isCollapsed = shouldCollapse;
      this.updateHiddenCrumbs();
    }
  }

  private updateHiddenCrumbs(): void {
    if(this.isCollapsed && this.breadcrumbs.length > 2) {
      // Esconde todos os crumbs exceto o primeiro e o último
      this.hiddenCrumbs = this.breadcrumbs.slice(1, -1);
    } else {
      this.hiddenCrumbs = [];
    }
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation(); // Impede que o document:click feche imediatamente
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) return breadcrumbs;
    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') url += `/${routeURL}`;
      const label = child.snapshot.data['breadcrumb'];
      if (label) breadcrumbs.push({ label, url });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
