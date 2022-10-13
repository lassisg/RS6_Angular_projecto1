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
  totalRecords: number = 0;
  currentPage: number = 1;
  searchType: string = 'fotos';
  activeSearch: boolean = false;
  termoPersquisa: string = '';

  constructor(private servJsonPlaceholder: ServjsonplaceholderService) { }

  ngOnInit(): void {
    this.readData();
  }

  readData() {

    if (this.activeSearch) {
      this.servJsonPlaceholder
        .searchPhotos(this.start, this.itemsPerPage, this.termoPersquisa)
        .subscribe(response => {
          this.photoList = response.body!;
          this.totalRecords = Number(response.headers.get('x-total-count'));
        });

    } else {
      this.servJsonPlaceholder
        .getPhotos(this.start, this.itemsPerPage)
        .subscribe(response => {
          // console.log(photos);
          // this.photoList = photos.slice(0, 20);
          // this.photoList = photos;
          // console.log(response);
          this.photoList = response.body!;
          this.totalRecords = Number(response.headers.get('x-total-count'));
        });
    }
  }

  nextPage() {
    if (this.start < (this.totalRecords - this.itemsPerPage)) {
      this.start += this.itemsPerPage;
      this.currentPage++;
      this.readData();
    }
  }

  previousPage() {
    if (this.start > 0) {
      this.start -= this.itemsPerPage;
      this.currentPage--;
    }
    this.readData();
  }

  firstPage() {
    this.start = 0;
    this.currentPage = 1;
    this.readData();
  }

  lastPage() {
    this.start = this.totalRecords - this.itemsPerPage;
    this.currentPage = this.totalRecords / this.itemsPerPage;
    this.readData();
  }

  efectuaPesquisa(valorPesquisa: string) {
    this.activeSearch = valorPesquisa.length > 0 ? true : false;
    this.termoPersquisa = valorPesquisa;

    if (this.activeSearch) {
      this.readData();
    } else {
      this.firstPage();
    }

  }

  cleanPesquisa() {
    this.activeSearch = false;
    this.readData();
  }

}
