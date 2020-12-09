import {createSelector} from "@ngrx/store";
import * as fromArticle from "./article.reducer";
import {AppState} from "../../app.reducer";


export const getArticleState = (state : AppState) => state.articles;
export const getArticles = createSelector(getArticleState, (state: fromArticle.State) => state.articles);
