import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({ source: 'assets/images/img2.jpg', thumbnail: 'assets/images/img2.jpg', title: 'Sopranos 1' });
    this.images.push({ source: 'assets/images/img4.jpg', thumbnail: 'assets/images/img4.jpg', title: 'Sopranos 3' });
  }

}
