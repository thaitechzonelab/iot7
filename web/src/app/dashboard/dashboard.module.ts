import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { ChartsModule as chartjsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { MorrisJsModule } from 'angular-morris-js';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {GaugesModule} from '@biacsics/ng-canvas-gauges';
import { SevenSegModule } from 'ng-sevenseg';
import {MatDividerModule} from '@angular/material/divider';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [MainComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_CHogTt3CkWzf67XgxR67yL7WrtwbAA8'
    }),
    MatDividerModule,
    SevenSegModule,
    GaugesModule,
    CommonModule,
    MatCardModule,
    DashboardRoutingModule,
    chartjsModule,
    NgxEchartsModule,
    MorrisJsModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DashboardModule {}
