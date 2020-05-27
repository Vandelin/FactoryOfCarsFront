import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewFormComponent } from './new-form/new-form.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  { path: '', redirectTo: '/newForm', pathMatch: 'full' },
  { path: 'newForm', component: NewFormComponent},
  { path: 'history', component: HistoryComponent},
  { path: '**', redirectTo: '/newForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
