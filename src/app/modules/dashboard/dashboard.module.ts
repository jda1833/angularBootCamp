import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { VideoDashboardComponent } from './pages/video-dashboard/video-dashboard.component';
import { StatFiltersComponent } from './components/stat-filters/stat-filters.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VideoListCardComponent } from './components/video-list-card/video-list-card.component';



@NgModule({
  declarations: [
    VideoDashboardComponent,
    StatFiltersComponent,
    VideoListComponent,
    VideoPlayerComponent,
    VideoListCardComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
