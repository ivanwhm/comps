import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ViewsHomeComponent } from './views-home/views-home.component';
import { ViewsRoutingModule } from './views-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent],
  imports: [CommonModule, ViewsRoutingModule],
})
export class ViewsModule {}
