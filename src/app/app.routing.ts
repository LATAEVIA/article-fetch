import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SingleArticleComponent } from './single-article/single-article.component'

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'article/:id',
    component: SingleArticleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
