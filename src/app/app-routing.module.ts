import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recuperar',
    children: [{
      path: "",
      loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
    },
    {
      path: ":usuarioId",
      loadChildren: () => import('./recuperar/recuperar-pw/recuperar-pw.module').then(m =>m.RecuperarPwPageModule)
    }
    ]
  },
  {
    path: 'ini-cond',
    loadChildren: () => import('./ini-cond/ini-cond.module').then( m => m.IniCondPageModule)
  },
  {
    path: 'ini-pasa',
    loadChildren: () => import('./ini-pasa/ini-pasa.module').then( m => m.IniPasaPageModule)
  },
  {
    path: 'conduct',
    loadChildren: () => import('./conduct/conduct.module').then( m => m.ConductPageModule)
  },
  {
    path: 'pasaj',
    loadChildren: () => import('./pasaj/pasaj.module').then( m => m.PasajPageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts/posts.module').then( m => m.PostsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
