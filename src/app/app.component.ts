import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 1;
  showInfo: boolean;
  showSocialMedia: boolean;
  imageArray = [
    'assets/imgs/1_c.jpg',
    'assets/imgs/2_c.jpg',
    'assets/imgs/2_r.jpg',
    'assets/imgs/3_r.jpg',
    'assets/imgs/4_l.jpg',
    'assets/imgs/5_r.jpg',
    'assets/imgs/6_l.jpg',
    'assets/imgs/6_r.jpg',
    'assets/imgs/7_c.jpg',
    'assets/imgs/8_l.jpg',
    'assets/imgs/8_r.jpg',
    'assets/imgs/9_c.jpg',
    'assets/imgs/9_l.jpg',
    'assets/imgs/10_r.jpg',
    'assets/imgs/11_l.jpg',
    'assets/imgs/12_c.jpg',
    'assets/imgs/13_c.jpg',
    'assets/imgs/13_r.jpg',
    'assets/imgs/14_l.jpg',
    'assets/imgs/14_r.jpg',
    'assets/imgs/15_c.jpg',
    'assets/imgs/16_c.jpg',
    'assets/imgs/16_r.jpg',
    'assets/imgs/17_c.jpg',
    'assets/imgs/17_l.jpg',
    'assets/imgs/18_r.jpg',
    'assets/imgs/19_c.jpg',
    'assets/imgs/20_l.jpg',
    'assets/imgs/20_r.jpg',
    'assets/imgs/21_l.jpg',
  ];

  photoSetArray = [];

  constructor() {
    this.showInfo = false;
    this.showSocialMedia = false;
    for (let i = 0; i < 21; i++) {
          const photoset = [
            'assets/imgs/' + (i + 1) + '_l.jpg',
            'assets/imgs/' + (i + 1) + '_c.jpg',
            'assets/imgs/' + (i + 1) + '_r.jpg'
          ];
          for (let j = 0; j < photoset.length; j++) {
            if (this.imageArray.indexOf(photoset[j]) < 0){
              photoset[j] = 'assets/imgs/placeholder.jpg';
            }
          }
          this.photoSetArray.push(photoset);
      }
  }

  next() {
    this.counter++;
    if (this.counter === 22) {
      this.counter = 1;
    }
  }

  previous() {
    this.counter--;
    if (this.counter === 0) {
      this.counter = 21;
    }
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  onMouseOver() {
    this.showSocialMedia = !this.showSocialMedia;
  }

  onMouseLeave() {
    this.showSocialMedia = false;
  }
}
