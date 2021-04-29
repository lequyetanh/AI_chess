import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessNormalComponent } from './chess-normal/chess-normal.component';
import { ChessMinimaxComponent } from './chess-minimax/chess-minimax.component';
import { TestComponent } from './test/test.component';
import { MinimaxComponent } from './minimax/minimax.component';
import { BruceForceComponent } from './bruce-force/bruce-force.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/bruce-force', pathMatch: 'full'
  },
  { path: 'normal', component: ChessNormalComponent },
  { path: 'test', component: TestComponent },
  { path: 'minimax', component: MinimaxComponent },
  { path: 'bruce-force', component: BruceForceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
