import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../services';

@Injectable({
  providedIn: 'root'
})
export class AdminRolGuard implements CanActivate {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if ( this.storageService.getRol() === 'ADMIN_ROL' ) {
      return true;
    }
    this.router.navigate(['/alert', 'noauth']);
    return false;
  }

}
