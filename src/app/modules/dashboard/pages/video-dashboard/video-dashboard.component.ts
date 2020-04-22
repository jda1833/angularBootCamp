import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videoData=[];
  selectedVideo = {};

  constructor(public httpsclient: HttpService) { }

  ngOnInit() {
    this.intialize()
  }

  async intialize(){
    this.videoData = await this.httpsclient.getVideos();
    this.selectedVideo = this.videoData[0]
  }

  selecteVideo(video){
    this.selectedVideo = video;
  }

}
