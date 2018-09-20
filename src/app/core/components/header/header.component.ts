import {Component, OnInit} from '@angular/core';
import {TranslationService} from '../../services/translation/translation.service';

@Component({
  selector: 'spia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pushRightClass: string = 'push-right';

  constructor(private translationSvc: TranslationService) {
    // con

  }

  ngOnInit() {
    // int
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.translationSvc.changeLanguage('en_GB');
  }
}
