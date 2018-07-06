import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsService {
    news: Observable<any>;

    constructor(public httpClient: HttpClient) {
        // this.news = this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afc9c0b1ca6a441a85f3e99bbe0fbeb0');

    }

    public getNews():any {
        this.news = this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afc9c0b1ca6a441a85f3e99bbe0fbeb0');
        return this.news;
    }
    public getStocks():any {
        this.news = this.httpClient.get('https://api.tradingeconomics.com/markets/components/psi20:ind?c=guest:guest&format=json');
        return this.news;
    }
}