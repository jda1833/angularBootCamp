import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpsClient: HttpClient) { }

  getVideos(): Promise<[any]> {
    return new Promise(resolve => {
      this.httpsClient.get(`https://api.angularbootcamp.com/videos`).subscribe((data: [any]) => {
        resolve(data)
      })
    })
  }
}
