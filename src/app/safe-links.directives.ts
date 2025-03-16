import { Directive } from '@angular/core';

@Directive({
  //selector use to tell angular to witch element that directive applied
  selector: 'a[appSafeLink]',
  standalone: true,
})
export class SafeLinkDirective {
  constructor() {
    console.log('safeLink directive is active!');
  }
}
