import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcompComponent } from './formcomp/formcomp.component';

const routes: Routes = [
  {
    path: '', component: FormcompComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
