import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessNormalComponent } from './chess-normal/chess-normal.component';
import { ChessMinimaxComponent } from './chess-minimax/chess-minimax.component';
import { TestComponent } from './test/test.component';
import { Alphabeta3Component } from './alphabeta3/alphabeta3.component';
import { Alphabeta4Component } from './alphabeta4/alphabeta4.component';
import { MinimaxComponent } from './minimax/minimax.component';
import { BruceForceComponent } from './bruce-force/bruce-force.component';
import { AngularTestComponent } from './angular-test/angular-test.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/alphabeta3', pathMatch: 'full'
  },
  { path: 'normal', component: ChessNormalComponent },
  { path: 'test', component: TestComponent },
  { path: 'chessminimax', component: ChessMinimaxComponent },
  { path: 'alphabeta3', component: Alphabeta3Component },
  { path: 'alphabeta4', component: Alphabeta4Component },
  { path: 'minimax', component: MinimaxComponent },
  { path: 'minimax', component: MinimaxComponent },
  { path: 'bruce-force', component: BruceForceComponent },
  { path: 'angular-test', component: AngularTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
