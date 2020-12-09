

import {Action} from '@ngrx/store';
import { Article } from '../model/article.model';

// export const LOAD_ARTICLES = '[Article] Load Article';
export const ADD_ARTICLE = '[Article] Add Article';
export const ADD_ARTICLES = '[Article] Add Articles';
export const INCREMENT_POINT = '[Article] Increment Point';
export const DECREMENT_POINT = '[Article] Decrement Point';


export class AddArticle implements Action{
    readonly type = ADD_ARTICLE;
    constructor(public payload: Article){}
}
export class AddArticles implements Action{
    readonly type = ADD_ARTICLES;
    constructor(public payload: Article[]){}
}
export class IncrementPoint implements Action{
    readonly type = INCREMENT_POINT;
    constructor(public payload: Article){}
}
export class DecrementPoint implements Action{
    readonly type = DECREMENT_POINT;
    constructor(public payload: Article){}
}

export type Actions = AddArticle | AddArticles | IncrementPoint | DecrementPoint;