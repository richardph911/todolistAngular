import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../redux/model/article.model';
import { Store } from '@ngrx/store';
import * as fromArticle from '../app.reducer';
@Component({
  selector: 'app-display-welcome',
  templateUrl: './display-welcome.component.html',
  styleUrls: ['./display-welcome.component.css']
})
export class DisplayWelcomeComponent implements OnInit {
  articles: Observable<Article[]>;

  constructor(private store: Store<fromArticle.AppState>) { 
   this.articles = this.store.select('articles');
  }

  ngOnInit(): void {
  }

  deleteArticle(index){}

}
