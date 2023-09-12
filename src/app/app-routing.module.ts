import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./page/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./page/library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./page/search/search.module').then( m => m.SearchPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
