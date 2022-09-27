import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Data } from './../assets/produtos';
import { Component, Input, OnInit } from '@angular/core';
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
  search = new FormControl();


  constructor(public http: HttpClient){
  }

  ngOnInit(): void {

  }

  pesquisarProduto(text: any ){

    console.log(
      this.data.data.filter( produto => produto.Nome.includes(text))
    )
    console.log(this.search.value)



    }

  title = 'front-end-fropee';
}
//Element.addEventListener('keypress',() => pesquisarProduto(this.search.value, ))

