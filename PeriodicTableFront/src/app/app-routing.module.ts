import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtomCellComponent } from './atom-cell/atom-cell.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';

const routes: Routes = [
  { path: 'atom-atom-cell', component: AtomCellComponent},
  { path: 'atom-periodic-table', component: PeriodicTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
