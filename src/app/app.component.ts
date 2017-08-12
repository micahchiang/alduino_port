import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showInfo: boolean;
  showSocialMedia: boolean;
  @Input() photoCount: number;

  photoSetArray = [];

  constructor() {
    this.showInfo = false;
    this.showSocialMedia = false;
    this.photoCount = 1;
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

  updatePhotoCount(counter) {
    this.photoCount = counter;
  }
}
