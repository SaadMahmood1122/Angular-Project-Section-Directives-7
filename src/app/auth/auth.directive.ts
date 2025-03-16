import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  //input
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('show the content');
      } else {
        console.log('Dont show the content');
      }
    });
  }
}
