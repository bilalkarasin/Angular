import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'tables',loadChildren : () =>
    import ('./tables/tables.module').then(m => m.TablesModule)
  },
  {path:'placeholders',loadChildren : () =>
    import ('./placeholders/placeholders.module').then(m=>m.PlaceholdersModule) // m herhangi bir harf
  },
  {path:'lists',loadChildren : () =>
    import ('./lists/lists.module').then(m=>m.ListsModule) // m herhangi bir harf
  },
  {path:'popups',loadChildren : () =>
    import ('./popups/popups.module').then(m=>m.PopupsModule) // m herhangi bir harf
  },
  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
