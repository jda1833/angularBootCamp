import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videoData=[];
  @Output("selectVideo") parenetSelectVideo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectVideo(video){
    this.parenetSelectVideo.emit(video);
  }

}
