import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtomCellComponent } from './atom-cell/atom-cell.component';
import { AtomDetailComponent } from './atom-detail/atom-detail.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';

const routes: Routes = [
  { path: 'atom-atom-cell', component: AtomCellComponent},
  { path: 'atom-periodic-table', component: PeriodicTableComponent},
  { path: 'atom-atom-detail', component: AtomDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
