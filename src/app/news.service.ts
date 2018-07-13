// import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NewsService {
    private cache: any;
    public cacheEntertainment: boolean;
    public cacheGeneral: boolean;
    public cacheBusiness: boolean;
    public cacheHealth: boolean;
    public cacheCience: boolean;
    public cacheSports: boolean;
    public cacheTechnology: boolean;
    public cacheArray: Array<object> = [];
    constructor(private http: HttpClient) {

    }

    public getNews(): Observable<any> {
        if (this.cache) {
            return Observable.of(this.cache);
        }

        return this.http.get('https://newsapi.org/v2/top-headlines?country=pt&apiKey=afc9c0b1ca6a441a85f3e99bbe0fbeb0')
            .map((res: Response) => {
                this.cache = res['articles'];
                return res['articles'];
            });

    }

    public getNewsCategory(category: string): Observable<any> {
        category = !category ? 'entertainment' : category;
        let that = this;
        
            if (this.cacheArray[category]) {
                console.log('existe cache');
                return Observable.of(this.cacheArray[category]);
            }

        return this.http.get('https://newsapi.org/v2/top-headlines?country=pt&category=' + category + '&apiKey=afc9c0b1ca6a441a85f3e99bbe0fbeb0')
            .map((res: Response) => {
                this.cacheArray[category] = res['articles'];
                return res['articles'];
            });

    }


    public getStocks(): any {
        return this.http.get('https://api.tradingeconomics.com/markets/components/psi20:ind?c=guest:guest&format=json')
            .map((res: Response) => {
                return res;
            });
        // this.observableData = this.httpClient.get('https://api.tradingeconomics.com/markets/components/psi20:ind?c=guest:guest&format=json');
        // return this.observableData;
    }
}