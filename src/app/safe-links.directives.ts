import { Directive } from '@angular/core';

@Directive({
  //selector use to tell angular to witch element that directive applied
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onLeavePageConform($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('safeLink directive is active!');
  }

  onLeavePageConform(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave this page?');

    if (wantsToLeave) {
      return;
    }
    event.preventDefault();
  }
}
