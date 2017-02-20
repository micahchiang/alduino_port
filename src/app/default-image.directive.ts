import { Component, Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
  }
})
export class DefaultImage {
  @Input() src: string;
  @Input() default: string;

  constructor(private el: ElementRef){}

  updateUrl() {
    this.src = this.default;
  }
}