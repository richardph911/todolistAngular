import * as fromArticle from './redux/reducer/article.reducer';
import { ActionReducerMap, createSelector} from '@ngrx/store';

export interface AppState{
    articles: fromArticle.State,
}
export const appReducer: ActionReducerMap<AppState> = {
    articles: fromArticle.reducer,
}
export const getArticleState = (state : AppState) => state.articles;
export const getArticles = createSelector(getArticleState,fromArticle.getArticles);