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
  addLinkForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(){
    this.addLinkForm = new FormGroup({
      title: new FormControl('', {validators: [Validators.required, Validators.minLength(5)] }),
      article: new FormControl('', { validators: [Validators.required, Validators.minLength(5)] })
    });
  }
  onSubmit(){
    let newArticle = new Article('A','B','C', 33);
    this.store.dispatch(new ArticleActions.AddArticle(newArticle));
  }

}
