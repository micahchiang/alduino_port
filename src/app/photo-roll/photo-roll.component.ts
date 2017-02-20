import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo-roll',
  templateUrl: './photo-roll.component.html',
  styleUrls: ['./photo-roll.component.scss']
})
export class PhotoRollComponent implements OnInit {

  @Input() counter: number;
  @Input() imageLeft: string;
  @Input() imageCenter: string;
  @Input() imageRight: string;
  
  constructor() { }

  ngOnInit() {

  }

}
