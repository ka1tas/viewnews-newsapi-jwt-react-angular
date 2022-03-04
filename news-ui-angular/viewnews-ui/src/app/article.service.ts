import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  articlesaveurl: string = "http://localhost:8080/viewnews/article/favourite";
  showfavurl: string = "http://localhost:8080/viewnews/article/showfavourite";
  deletefavurl: string = "http://localhost:8080/viewnews/article/favourite";
  showAnalysturl: string = "http://localhost:8080/viewnews/admin/user";
  changeStatusturl: string = "http://localhost:8080/viewnews/admin/block";

  constructor(private http: HttpClient) { }

  addArticle(json: any): Observable<any> {
    return this.http.post<any>(this.articlesaveurl, json, httpOptions);
  }

  showArticle(lang: any): Observable<any> {
    let viewarticle = "https://newsapi.org/v2/top-headlines?language=" + lang + "&apiKey=71f791c2b2044004b9e096eb3ef76478&from=2019-01-30";
    return this.http.get<any>(viewarticle);
  }

  showFavs(userId: any): Observable<any> {
    return this.http.post<any>(this.showfavurl, userId, httpOptions);
  }

  deletefav(id: any): Observable<any> {
    return this.http.delete<any>(this.deletefavurl, id);
  }


  showAnalyst(name: any): Observable<any> {
    return this.http.post<any>(this.showAnalysturl, name, httpOptions);
  }



  changeStatus(user: any): Observable<any> {
    return this.http.post<any>(this.changeStatusturl, user, httpOptions);
  }




  searchNews(name: any): Observable<any> {
    let searchNews = "https://newsapi.org/v2/everything?q=" + name + "&sortBy=publishedAt&apiKey=71f791c2b2044004b9e096eb3ef76478";
    return this.http.get<any>(searchNews);
  }


}
