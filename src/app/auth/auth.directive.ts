import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  effect,
  inject,
  input,
} from '@angular/core';
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
  // reference to the templet on which that directive 'appAuth' is added
  private templetRef = inject(TemplateRef);
  // viewContainerRef is ref where templetRef is used give access to the content of the templet
  private viewContainerRef = inject(ViewContainerRef);
  constructor() {
    //effect() run every time if singnal value changes
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templetRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
