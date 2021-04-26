import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessNormalComponent } from './chess-normal/chess-normal.component';
import { ChessMinimaxComponent } from './chess-minimax/chess-minimax.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/test', pathMatch: 'full'
  },
  { path: 'normal', component: ChessNormalComponent },
  { path: 'minimax', component: ChessMinimaxComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
