import { Component, Inject, OnInit } from '@angular/core';
import { ifError } from 'assert';
import { from } from 'rxjs';
import { MyserviceService } from './myservice.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [MyserviceService]
})
export class AppComponent {
  options =[];
  @ViewChild('mySelect') mySelect: ElementRef;
  constructor(
    @Inject(MyserviceService) private myservice
  ) {
    for (let i = 0; i < 100; i++) {
      this.options.push({
        id: i,
        name: "string" + i
      })
    }
  }

  print() {
    this.myservice.printHello()
  }

  onScroll() {
    console.log("my friend")
    const selectElement = this.mySelect.nativeElement;
    if (selectElement.scrollTop + selectElement.clientHeight >= selectElement.scrollHeight) {
      selectElement.scrollTop = selectElement.scrollHeight;
      console.log("my friend")
    }
  }

  ngOnInit() {
    const selectElement = this.mySelect.nativeElement;

    selectElement.addEventListener('scroll', (event) => {
      console.log("my friend")
      if (selectElement.scrollTop + selectElement.clientHeight >= selectElement.scrollHeight) {
        // The user has scrolled to the bottom of the select element
        // You can add your scroll to bottom logic here
        console.log("my friend")
        for (let i = 100; i < 120; i++) {
          this.options.push({
            id: i,
            name: "string" + i
          })
        }
      }
    });
  }
}
