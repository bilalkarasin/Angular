import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';
import { response } from 'express';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrl: './display-photo.component.css'
})
export class DisplayPhotoComponent implements OnInit {
  photoUrl:string = '';
  constructor(private photoService:PhotoService) {  //5.

  }

  ngOnInit(): void {
    this.getImages();  // sayfa ilk açılınca resim gelsin diye
  }

  getImages(){
    this.photoService.getPhotos().subscribe(response=> {
      this.photoUrl =response.urls.regular;
      // console.log(this.photoUrl);
    });
  }

  onClick(){
    this.getImages();
  }
}
