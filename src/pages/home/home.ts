import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { NewsService } from '../../app/news.service';
import { SettingsPage } from '../settings/settings';
// import * as cheerio from '../../../node_modules/cheerio/lib/cheerio';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  public allNews: any;
  public allStocks: any;
  public allNewsCategory:any;
  public listCategories: Array<Object>;
  public buttonActive:boolean = false;
  public selectedParam:string;
  public browser:any;

  constructor(public navCtrl: NavController, private newsService: NewsService, public popoverCtrl: PopoverController,private iab: InAppBrowser) {
    this.listCategories = [{ 'nome': 'Entretenimento','param':'entertainment' }, { 'nome': 'Generalista','param':'general' }, { 'nome': 'Negócios','param':'business' }, { 'nome': 'Saúde','param':'health' }, { 'nome': 'Ciência','param':'cience' }, { 'nome': 'Desporto','param':'sports' }, { 'nome': 'Tecnologia','param':'technology' },];

  }

  

  ngOnInit() {

    

    this.newsService.getNews().subscribe(data => {
      this.allNews = data;
    });

    this.newsService.getStocks().subscribe(data => {
      this.allStocks = data;
    });

    this.selectedParamFunc('entertainment');
    this.getNewsFromCategory('entertainment');

  }

  selectedParamFunc(param:string){
    this.selectedParam=param;
  }

  getNewsFromCategory(category:string){
    this.newsService.getNewsCategory(category).subscribe(data => {
      this.allNewsCategory = data;
      this.goUp();
    });
  }

  goUp(){
    if(document.getElementById('categoryNews')){
      document.getElementById('categoryNews').scrollTop = 0;
      document.getElementById('headlines').scrollTop = 0;
    }
    
  }

  goURL(url){
    this.browser=this.iab.create(url);
    this.browser.show();
  
  }

  down(phrase: any) {
    if (String(phrase).indexOf('-') !== -1) {
      return true;
    }
    return false;
  }

  settingsPage(event: any) {
    this.navCtrl.push(SettingsPage);
  }

}
