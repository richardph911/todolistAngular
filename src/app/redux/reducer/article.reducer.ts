import { Article } from '../model/article.model';
import * as actions from '../actions/article.actions';

export interface State {
    articles: Article[],
}
export const initialState: State = {
    articles : [{id: 0, title: 'title1', link: 'link1', points: 10 }, {id: 1, title: 'title2', link: 'link2', points: 20 }],
}
export function reducer(state: State = initialState, action: actions.Actions){
    switch(action.type){
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
