import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../../Authentication/service/httpclient.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

	employees:Employee[];
  constructor(
	  private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
  }

}
