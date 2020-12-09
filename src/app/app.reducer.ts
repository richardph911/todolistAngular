import * as fromArticle from './redux/reducer/article.reducer';
import { ActionReducerMap, createSelector} from '@ngrx/store';

export interface AppState{
    articles: fromArticle.State,
}
export const appReducer: ActionReducerMap<AppState> = {
    articles: fromArticle.reducer,
}
