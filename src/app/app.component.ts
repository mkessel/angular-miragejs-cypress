import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  test: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(){
    this.test = this.httpClient.get("api/foo").toPromise();
  }
}
