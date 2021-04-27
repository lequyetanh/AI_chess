import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessNormalComponent } from './chess-normal/chess-normal.component';
import { ChessMinimaxComponent } from './chess-minimax/chess-minimax.component';
import { TestComponent } from './test/test.component';
import { MinimaxComponent } from './minimax/minimax.component';


@NgModule({
  declarations: [
    AppComponent,
    ChessNormalComponent,
    ChessMinimaxComponent,
    TestComponent,
    MinimaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
