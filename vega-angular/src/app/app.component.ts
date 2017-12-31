import { Component, OnInit } from '@angular/core';
import { VegaHttpClient } from '../services/vega.httpClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  /**
   *
   */
  constructor(private httpClient: VegaHttpClient) {}

  public ngOnInit(): void {
    this.httpClient.baseEndpoint = 'http://localhost:5000/api/';
  }
}
