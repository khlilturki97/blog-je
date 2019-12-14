import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListUserComponent} from './user/list-user/list-user.component';
import {TestComponent} from './test/test.component';
import {DetailUserComponent} from './user/detail-user/detail-user.component';


const routes: Routes = [
  {
    path: '',
    component: ListUserComponent
  },
  {
    path: ':id',
    component: DetailUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
