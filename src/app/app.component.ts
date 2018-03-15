import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	option = {
  		'appTitle':'AngularJS CLI Template',
  		'author':'Tomax Hui',
  		'defaultLang':'en',
  		'langOption':['en','tc','sc'],
  		'langCode':['en','zh-HK','zh-CN']
  	};

  	constructor(private translate: TranslateService) {
    	this.initTranslate();
	}

    initTranslate() {
	    this.translate.setDefaultLang(this.option.defaultLang);
	    
	    if(this.translate.getBrowserCultureLang() == 'zh-HK' || this.translate.getBrowserCultureLang() == 'zh-TW' || this.translate.getBrowserCultureLang() == 'zh-MO'){
	    	console.log('Current Language Chinese Traditional');
	    	this.translate.use('zh-HK'); // Set your language here
	    }else if(this.translate.getBrowserCultureLang() == 'zh-CN' || this.translate.getBrowserCultureLang() == 'zh-SG'){
	    	console.log('Current Language Chinese Simplified');
	    	this.translate.use('zh-CN'); // Set your language here
	    }else{
	    	console.log('Current Language English');
	    	this.translate.use('en'); // Set your language here
	    }
	}
}
