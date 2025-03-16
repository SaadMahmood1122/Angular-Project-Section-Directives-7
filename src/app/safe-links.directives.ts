import { Directive, Input } from '@angular/core';

@Directive({
  //selector use to tell angular to witch element that directive applied
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onLeavePageConform($event)',
  },
})
export class SafeLinkDirective {
  @Input() queryParam: string = 'myapp';
  constructor() {
    console.log('safeLink directive is active!');
  }

  onLeavePageConform(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave this page?');

    if (wantsToLeave) {
      //initail typescript doesnot know that event have href to
      // convence typescript that its anchor element by as HTMLAnchorElement
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href =
        address + '?from=' + this.queryParam;
      return;
    }
    event.preventDefault();
  }
}
