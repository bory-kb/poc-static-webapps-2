import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'poc-static-webapps-b';
  message = 'default';

  constructor(private http: HttpClient) {
    const headers = {
      responseType: 'text'
    }
    this.http.get('/api/message?name=test-man', { headers }).subscribe(resp => {

      const ret = resp;
      this.message = ret.toString()
    });
  }

}


