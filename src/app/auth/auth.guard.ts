import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGService } from './auth-g.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthGService,
    private router: Router
  ) { }
  canActivate(
    next,
    state
  ): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1), map(user => !!user), tap(loggedIn => {
        if (!loggedIn) {
          console.log('accesso denegado');
          this.router.navigate(['/']);
        }
      })
    );
  }

}
