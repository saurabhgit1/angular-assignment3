import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
//   {path:'', redirectTo: 'input', pathMatch: 'full'},
//   {path: 'input', component:AppComponent}
  {path: 'input/display', component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }