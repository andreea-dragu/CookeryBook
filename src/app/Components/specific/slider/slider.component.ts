import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() sliderData: any = []

  state: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onNavigationSlider(direction: string) {
    if(this.state === 0 && direction === 'prev' ) return this.state = this.sliderData.length-1
    if(this.state === this.sliderData.length-1 && direction === 'next' ) return this.state = 0

    if(direction === 'prev') {
      this.state--
    } else if(direction === 'next') {
      this.state++
    }

    return this.state
  }

  onNavigateTo(slideId: number) {
    return this.state = slideId;
  }

}
