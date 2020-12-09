import { Article } from '../model/article.model';
import * as actions from '../actions/article.actions';

export interface State{
    articles: Article[],
}
export const initialState: State = {
    articles : [new Article('A','B','C',11),new Article('A','B','C',11)],
}
export function reducer(state: State = initialState, action: actions.Actions){
    switch( action.type){
        case actions.ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload],
            };
        // case actions.ADD_ARTICLES:
        //         return {
        //             ...state,
        //             articles: [...state.articles, ...action.payload],
        //         };
        case actions.INCREMENT_POINT:
            return {
                ...state,
                articles: state.articles.map(
                    (article: Article) => article.id == action.payload.id ? Object.assign({},article,++action.payload.points) : article 
                    )
            }   
        case actions.DECREMENT_POINT:
            return {
                ...state,
                articles: state.articles.map(
                    (article: Article) => article.id == action.payload.id ? Object.assign({},article,--action.payload.points) : article 
                    )
            }          
        default: 
            return state;
    }
}
