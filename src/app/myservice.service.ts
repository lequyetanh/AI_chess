
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  keyBoardURL = 'http://localhost:4000/keyBoard';
  // keyBoardURL = 'https://trituenhantao.herokuapp.com/keyBoard';
  keyBoard: any;
  keyBoardBackUp: any;

  constructor(private http: HttpClient) {
    console.log('hello mother fucker')
  }

  postKeyBoard(keyBoard) {
    let url = `${this.keyBoardURL}/post`;
    // console.log(keyBoard);
    return this.http.post(url, keyBoard);
  }

  printHello(){
    console.log("hello world")
  }
}
