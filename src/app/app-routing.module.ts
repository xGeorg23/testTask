import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PostPageComponent} from "./post-page/post-page.component";
import {FavoritesComponent} from "./favorites/favorites.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'post-page/:id', component: PostPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}