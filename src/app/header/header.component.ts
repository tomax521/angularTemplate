import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	langs: any[] = [
		{value: 'en', name: 'EN'},
		{value: 'zh-HK', name: '繁'},
		{value: 'zh-CN', name: '簡'}
	];
	currentLang: string = '';

	constructor(private translate: TranslateService) {
		if(this.translate.getBrowserCultureLang() == 'zh-HK' || this.translate.getBrowserCultureLang() == 'zh-TW' || this.translate.getBrowserCultureLang() == 'zh-MO'){
	    	this.currentLang = 'zh-HK';
	    }else if(this.translate.getBrowserCultureLang() == 'zh-CN' || this.translate.getBrowserCultureLang() == 'zh-SG'){
	    	this.currentLang = 'zh-CN';
	    }else{
	    	this.currentLang = 'en'; 
	    }
	}

	ngOnInit() {
	}

	setNewLang(value){
		console.log('Current Language',value);
		this.translate.use(value);
	}
}
