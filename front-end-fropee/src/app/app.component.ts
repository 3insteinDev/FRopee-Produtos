import { Data } from './../assets/produtos';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { noImage } from '../assets/img/no-image.jpeg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  result: any;
  urlToJson = 'assets/produtos.json';
  data = Data
  search = ""

  constructor(public http: HttpClient){
  }

  ngOnInit(): void {
      this.http.get<any>(this.urlToJson).subscribe(Response =>{
        this.result = Response;
      })
  }

  title = 'front-end-fropee';
}
