import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  ActivatedRoute, Event, NavigationEnd, Router, RouterEvent
} from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AutoUnsub, PAGE_ID_KEY } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@AutoUnsub()
export class AppComponent {
  title = 'lets-code-rubens';
  routerEventSubscription: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private _document: Document,
  ) {
    this.routerEventSubscription = this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this._activatedRoute),
        map(activatedRoute => activatedRoute.firstChild),
        switchMap(route => route.data)
      )
      .subscribe((e) => {
        console.log(e)
        const previousPage = this._document.body.classList.value.split(' ').find(className => className.startsWith(PAGE_ID_KEY));
        this._document.body.classList.remove(previousPage);
        this._document.body.classList.add(`${PAGE_ID_KEY}-${e.pageId}`);
      });
  }
}
