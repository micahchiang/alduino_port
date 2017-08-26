import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'photo-roll',
  templateUrl: './photo-roll.component.html',
  styleUrls: ['./photo-roll.component.scss']
})
export class PhotoRollComponent implements OnInit {

  counter: number;
  @Output() photoCount = new EventEmitter<number>();
  didClickNext: boolean;
  didClickPrevious: boolean;

  constructor() {
    this.counter = 1;
    this.didClickNext = false;
    this.didClickPrevious = false
  }

  ngOnInit() {

  }

  next() {
    this.counter++;
    if (this.counter === 27) {
      this.counter = 1;
    }
      this.photoCount.emit(this.counter);
  }

  previous() {
    this.counter--;
    if (this.counter === 0) {
      this.counter = 26;
    }
      this.photoCount.emit(this.counter);
  }

}
