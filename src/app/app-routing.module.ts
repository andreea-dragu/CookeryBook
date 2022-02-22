import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './Pages/about/about.component'
import { CategoriesComponent } from './Pages/categories/categories.component'
import { CategoryComponent } from './Pages/category/category.component'
import { ContactComponent } from './Pages/contact/contact.component'
import { HomeComponent } from './Pages/home/home.component'
import { LoginComponent } from './Pages/login/login.component'
import { RecipeComponent } from './Pages/recipe/recipe.component'
import { RecipesComponent } from './Pages/recipes/recipes.component'
import { PreventLoggedInAccessGuard } from './_Guards/prevent-logged-in-access.guard'


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [PreventLoggedInAccessGuard]},
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
