import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { SeriesComponent } from './components/series/series.component';
import { BookInfoComponent } from './components/book-info/book-info.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'add', component: BookAddComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'books/:id', component: BookInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
