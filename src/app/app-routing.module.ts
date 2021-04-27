import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessNormalComponent } from './chess-normal/chess-normal.component';
import { ChessMinimaxComponent } from './chess-minimax/chess-minimax.component';
import { TestComponent } from './test/test.component';
import { MinimaxComponent } from './minimax/minimax.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/minimax', pathMatch: 'full'
  },
  { path: 'normal', component: ChessNormalComponent },
  { path: 'test', component: TestComponent },
  { path: 'minimax', component: MinimaxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
