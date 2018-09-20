import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../local-storage/local-storage.service';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/race';

@Injectable()
export class TranslationService {
  private langs: string[] = ['en_US', 'en_GB'];
  private defaultLang: string = 'en_US';
  private suffix: string = '.json';

  constructor(private translate: TranslateService,
              private http: HttpClient,
              private storage: LocalStorageService) {
    this.translate.addLangs(this.langs);
    this.translate.setDefaultLang(this.defaultLang);
    this.translate.use(this.defaultLang);
    // const browserLang = this.translate.getBrowserLang() + '_US';
    // this.translate.use(browserLang.match(/en|fr/) ? browserLang : this.defaultLang);
  }

  registerFor(modulePath: string): void {
    this.getTranslations(this.translate.currentLang, modulePath);

  }

  changeLanguage(changedLang: string): void {
    this.translate.use(changedLang);
  }

  private getTranslations(lang: string, modulePath: string): Observable<{ [key: string]: string }> {
    const prefix: string = modulePath ? `${modulePath.split('/').pop()}-${lang}` : lang;
    const url: string = `${modulePath}/i18n/${prefix}${this.suffix}`;

    return Observable.race(
      this.storage.get<{ [key: string]: string }>(url),
      this.http.get<{ [key: string]: string }>(url)
        .do(translations => this.storage.set<{ [key: string]: string }>(url, translations))
    );
  }
}
