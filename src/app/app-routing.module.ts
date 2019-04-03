import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';

const appRouter: Routes=[
  {path: 'library', component: AppComponent},
 { path: 'addBook', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
