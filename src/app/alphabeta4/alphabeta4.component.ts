import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, delay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-alphabeta4',
  templateUrl: './alphabeta4.component.html',
  styleUrls: ['./alphabeta4.component.scss']
})
export class Alphabeta4Component implements OnInit {

  constructor() {
    of("2").pipe(
      // delay(5000)
    ).subscribe(()=> {
      console.log("bitchhhhhhhhhhhhhhhhhhhhhhhhh")
    })
  }

  ngOnInit(): void {
  }

}
