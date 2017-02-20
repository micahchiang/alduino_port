import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navigationInitiated', [
      state('inactive', style({
        opacity: 1
      })),
      state('active', style({
        opacity:0
      })),
      transition('inactive  => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
  ]
})
export class AppComponent {
  counter = 1;
  state: string = 'inactive';
  showInfo = false;
  firstLoad = true;
  imageLeft = '/assets/imgs/'+this.counter+'_l.jpg';
  imageCenter = '/assets/imgs/'+this.counter+'_c.jpg';
  imageRight = '/assets/imgs/'+this.counter+'_r.jpg'; 

  next() {
    this.state = 'active';
    this.counter++;
    if(this.counter == 22){
      this.counter = 1;
    }
    setTimeout(()=>{
      this.imageLeft = '/assets/imgs/'+this.counter+'_l.jpg';
      this.imageCenter = '/assets/imgs/'+this.counter+'_c.jpg';
      this.imageRight = '/assets/imgs/'+this.counter+'_r.jpg';
    },500);
    setTimeout(()=>{
      this.state = 'inactive';
    }, 500);
  }

  previous() {
    this.state = 'active';
    this.counter--;
    if(this.counter == 0){
      this.counter = 21;
    }
    setTimeout(()=>{
          this.imageLeft = '/assets/imgs/'+this.counter+'_l.jpg';
          this.imageCenter = '/assets/imgs/'+this.counter+'_c.jpg';
          this.imageRight = '/assets/imgs/'+this.counter+'_r.jpg';
        },500);
        setTimeout(()=>{
          this.state = 'inactive';
        }, 500);
    }

    toggleInfo() {
      if(this.firstLoad = true){
        this.firstLoad = false;
      }
      this.showInfo = !this.showInfo
    }
}
