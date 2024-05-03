import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  //2.

interface CallResponse{
  urls:{
    regular:string
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }  //3.

  getPhotos(){

    return this.http.get<CallResponse>('https://api.unsplash.com/photos/random',{    //4.
      headers: {
        Authorization: 'Client-ID wVEGh2pNp-zquc5kOAu2aO1gRrhYY1j3klPXnvTnWx8'
      }

    }
  );
}
}
