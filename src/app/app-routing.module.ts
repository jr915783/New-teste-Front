import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasComponent } from './pages/vagas/vagas.component';

const routes: Routes = [
    
  {
    path: 'Vagas',
    component: VagasComponent
  },
 
  { path: '**', 
  component: VagasComponent  
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
