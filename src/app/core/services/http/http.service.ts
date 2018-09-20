import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService {

  createHttpParams(parameters: {[key: string]: string | number}): HttpParams {
    return Object.keys(parameters)
      .filter(key => !!parameters[key])
      .reduce((p, key) => p.set(key, parameters[key].toString()), new HttpParams());
  }

}
