import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { NewsService } from '../../app/news.service';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  private allNews: any;
  private allStocks: any;
  

  constructor(public navCtrl: NavController, private newsService: NewsService,public popoverCtrl: PopoverController) {
   
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.allNews = data.articles;
    });

    this.newsService.getStocks().subscribe(data => {
      this.allStocks = data;
    });

  }

  settingsPage(event:any){
      this.navCtrl.push(SettingsPage);
  }
  
}
