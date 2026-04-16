import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';;
import { SettingsComponent } from './Components/settings/settings.component';
import { GraphComponent } from './Components/graph/graph.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'settings', component: SettingsComponent },

  { path: 'graph', component: GraphComponent },

  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }