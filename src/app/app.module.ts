import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//structure page
import { AsideComponent } from './structure/aside/aside.component';
import { HomeComponent } from './structure/home/home.component';
//components
import { TopRecepiesComponent } from './components/recepies/top-recepies/top-recepies.component';
import { NewRecepiesComponent } from './components/recepies/new-recepies/new-recepies.component';
import { PopularRecepiesComponent } from './components/recepies/popular-recepies/popular-recepies.component';
import { RecepiesComponent } from './components/recepies/recepies.component';
import { FoodsComponent } from './components/foods/foods.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HomeComponent,
    TopRecepiesComponent,
    NewRecepiesComponent,
    PopularRecepiesComponent,
    RecepiesComponent,
    FoodsComponent,
    CookbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
