import { Component, OnInit } from '@angular/core';
import { Photo } from '../photos';
import { ServjsonplaceholderService } from '../servjsonplaceholder.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photoList: Photo[] = [];
  start: number = 0;
  itemsPerPage: number = 20;

  constructor(private servJsonPlaceholder: ServjsonplaceholderService) { }

  ngOnInit(): void {
    this.readData();
  }

  readData() {
    this.servJsonPlaceholder.getPhotos(this.start, this.itemsPerPage).subscribe(photos => {
      // console.log(photos);
      // this.photoList = photos.slice(0, 20);
      this.photoList = photos;
    });
  }

  nextPage() {
    this.start += this.itemsPerPage;
    this.readData();
  }

  previousPage() {
    this.start -= this.itemsPerPage;
    this.start = this.start < 0 ? 0 : this.start;
    this.readData();
  }

}
