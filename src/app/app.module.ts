import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgSelectModule } from '@ng-select/ng-select'
import { LayoutModule } from '@angular/cdk/layout'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CategoriesComponent } from './Pages/categories/categories.component'
import { CategoryComponent } from './Pages/category/category.component'
import { RecipesComponent } from './Pages/recipes/recipes.component'
import { RecipeComponent } from './Pages/recipe/recipe.component'
import { AboutComponent } from './Pages/about/about.component'
import { ContactComponent } from './Pages/contact/contact.component'
import { DataIteratorComponent } from './Components/general/data-iterator/data-iterator.component'
import { HomeComponent } from './Pages/home/home.component'
import { SortFilterPipe } from './_Pipes/sort-filter.pipe'
import { SearchFilterPipe } from './_Pipes/search-filter.pipe'
import { PaginationFilterPipe } from './_Pipes/pagination-filter.pipe'
import { UniqueValuePipe } from './_Pipes/unique-value.pipe'
import { LoginComponent } from './Pages/login/login.component'
import { ModalComponent } from './Components/general/modal/modal.component'
import { ButtonComponent } from './Components/general/button/button.component'
import { FilterComponent } from './Components/specific/filter/filter.component'
import { FooterComponent } from './Components/specific/footer/footer.component'
import { HeaderComponent } from './Components/specific/header/header.component'
import { HeroComponent } from './Components/specific/hero/hero.component'
import { SliderComponent } from './Components/specific/slider/slider.component'
import { RecipeItemComponent } from './Components/specific/recipe-item/recipe-item.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    RecipesComponent,
    RecipeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    ButtonComponent,
    SliderComponent,
    HeroComponent,
    FilterComponent,
    DataIteratorComponent,
    HomeComponent,
    SortFilterPipe,
    SearchFilterPipe,
    PaginationFilterPipe,
    UniqueValuePipe,
    LoginComponent,
    RecipeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
