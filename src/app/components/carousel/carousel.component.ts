import {Component, Inject, OnInit} from '@angular/core';
import {CAROUSEL_ITEMS} from "../../core/constants/banner.constants";
import {CarouselItemsInterface} from "../../core/interfaces/carousel-Items.interface";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [{provide: CAROUSEL_ITEMS, useValue: CAROUSEL_ITEMS}],
})
export class CarouselComponent implements OnInit {

  activeIndex: number = 0;

  constructor(@Inject(CAROUSEL_ITEMS) public items: CarouselItemsInterface[]) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.next();
    }, 3000);
  }

  next() {
    if (this.activeIndex !== this.items.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
  }

  prev() {
    if (this.activeIndex !== 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.items.length - 1;
    }
  }

  activateByIndex(idx = 0) {
    console.log(idx)
    this.activeIndex = idx;
  }

}
