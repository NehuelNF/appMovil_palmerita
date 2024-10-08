import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./page/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'season',
    loadChildren: () => import('./page/season/season.module').then( m => m.SeasonPageModule)
  },
  {
    path: 'noticia',
    loadChildren: () => import('./page/noticia/noticia.module').then( m => m.NoticiaPageModule)
  },
  {
    path: 'vtuber',
    loadChildren: () => import('./page/vtuber/vtuber.module').then( m => m.VtuberPageModule)
  },


 



 



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
