import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VegaHttpClient {
  private _baseEndpoint: string;
  public get baseEndpoint(): string {
    return this._baseEndpoint;
  }
  public set baseEndpoint(v: string) {
    if (this._baseEndpoint != v) {
      // Make sure the endpoint doesnt end with a slash.
      if (v.endsWith('/')) {
        v = v.substring(0, v.length - 1);
      }
      this._baseEndpoint = v;
    }
  }

  constructor(private httpClient: HttpClient) {}

  get<T>(
    url: string,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<any> {
    if (!this.baseEndpoint || this.baseEndpoint == '') {
      throw new Error('Endpoint not set.');
    }
    if (url && !url.startsWith('/')) {
      url = '/' + url;
    }

    return this.httpClient.get<T>(`${this.baseEndpoint}${url}`, options);
  }
}
