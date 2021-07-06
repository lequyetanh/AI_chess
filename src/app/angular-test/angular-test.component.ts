import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-test',
  templateUrl: './angular-test.component.html',
  styleUrls: ['./angular-test.component.scss']
})
export class AngularTestComponent implements OnInit {

  data = "hello mother fucker";
  constructor() { }

  ngOnInit(): void {
  }

}
