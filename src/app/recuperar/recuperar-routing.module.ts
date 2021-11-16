import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarPage } from './recuperar.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarPage
  },  {
    path: 'recuperar-pw',
    loadChildren: () => import('./recuperar-pw/recuperar-pw.module').then( m => m.RecuperarPwPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarPageRoutingModule {}
