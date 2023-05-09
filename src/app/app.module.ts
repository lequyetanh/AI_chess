import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessNormalComponent } from './chess-normal/chess-normal.component';
import { ChessMinimaxComponent } from './chess-minimax/chess-minimax.component';
import { TestComponent } from './test/test.component';
import { MinimaxComponent } from './minimax/minimax.component';
import { BruceForceComponent } from './bruce-force/bruce-force.component';
import { AngularTestComponent } from './angular-test/angular-test.component';
import { Alphabeta3Component } from './alphabeta3/alphabeta3.component';
import { Alphabeta4Component } from './alphabeta4/alphabeta4.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyserviceService } from './myservice.service';
@NgModule({
  declarations: [
    AppComponent,
    ChessNormalComponent,
    ChessMinimaxComponent,
    TestComponent,
    MinimaxComponent,
    BruceForceComponent,
    AngularTestComponent,
    Alphabeta3Component,
    Alphabeta4Component
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // MyserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
