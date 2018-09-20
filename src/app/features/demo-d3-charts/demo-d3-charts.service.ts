import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {DemoD3ChartsModel} from './demo-d3-charts-model';

@Injectable()
export class DemoD3ChartsService {
  private url: string = `${environment.api}/chart-data/data.json`;

  constructor(private _httpClient: HttpClient) {
  }

  getChartData() {
    return this._httpClient.get<DemoD3ChartsModel[]>(this.url);
  }

}
