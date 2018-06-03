import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
	@ViewChild(KSSwiperContainer)
	swiperContainer:KSSwiperContainer;
	data:Array<number>;
  	swipeOptions:any;

	constructor() {
		this.swipeOptions = {
		  	slidesPerView: 1,
		  	loop: false,
		  	spaceBetween: 5,
		  	pagination:'.swiper-pagination',
		  	preventClicks:false,
		  	preventClicksPropagation:false,
		  	paginationClickable: true
		};
		this.data = [
		  1, 2, 3, 4, 5, 6
		]
	}

	ngOnInit() {
	}

	moveNext() {
    	this.swiperContainer.swiper.slideNext();
  	}

  	movePrev() {
    	this.swiperContainer.swiper.slidePrev();
  	}
}
