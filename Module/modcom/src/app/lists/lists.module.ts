import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListHomeComponent } from './list-home/list-home.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SharedModule } from "../shared/shared.module";
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
    declarations: [
        ListHomeComponent,
        StatisticComponent,
        ItemListComponent
    ],
    imports: [
        CommonModule,
        ListsRoutingModule,
        SharedModule
    ]
})
export class ListsModule { }
