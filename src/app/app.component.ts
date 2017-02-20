import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 1;
  showInfo = false;
  firstLoad = true;
  imageLeft = '/assets/imgs/'+this.counter+'_l.jpg';
  imageCenter = '/assets/imgs/'+this.counter+'_c.jpg';
  imageRight = '/assets/imgs/'+this.counter+'_r.jpg'; 

  next() {
    this.counter++;
    if(this.counter == 22){
      this.counter = 1;
    }
    this.imageLeft = '/assets/imgs/'+this.counter+'_l.jpg';
    this.imageCenter = '/assets/imgs/'+this.counter+'_c.jpg';
    this.imageRight = '/assets/imgs/'+this.counter+'_r.jpg';
  }

  previous() {
    this.counter--;
    if(this.counter == 0){
      this.counter = 21;
    }
      this.imageLeft = '/assets/imgs/'+this.counter+'_l.jpg';
      this.imageCenter = '/assets/imgs/'+this.counter+'_c.jpg';
      this.imageRight = '/assets/imgs/'+this.counter+'_r.jpg';
    }

    toggleInfo() {
      if(this.firstLoad = true){
        this.firstLoad = false;
      }
      this.showInfo = !this.showInfo
    }
}
