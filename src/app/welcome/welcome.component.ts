import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Article } from '../redux/model/article.model';
import * as ArticleActions from '../redux/actions/article.actions';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  id: number = 0;
  addLinkForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(){
    this.addLinkForm = new FormGroup({
      title: new FormControl('', {validators: [Validators.required, Validators.minLength(3)] }),
      article: new FormControl('', { validators: [Validators.required, Validators.minLength(3)] })
    });
  }
  onSubmit(){
    const title = this.addLinkForm.controls['title'].value;
    const article = this.addLinkForm.controls['article'].value;
    this.store.dispatch(new ArticleActions.AddArticle(new Article(++this.id, title, article, 0)));
  }

}
