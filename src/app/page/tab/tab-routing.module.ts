import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'inicio',
        redirectTo: './../../page/inicio/inicio.module',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadChildren: () => import('./../../page/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'season',
        loadChildren: () => import('./../season/season.module').then( m => m.SeasonPageModule)
      },
      {
        path: 'top',
        loadChildren: () => import('./../top/top.module').then( m => m.TopPageModule)
      },
    ]
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
