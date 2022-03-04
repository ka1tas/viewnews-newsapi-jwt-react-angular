import { all } from 'redux-saga/effects';
import {
    watchFetchArticleonLoad, watchFetchArticleonSearch, watchLoadLanguages, watchsignUpUser, watchLoadRoles,
    watchsignIn, watchloadFavouriteArticle , watchAddFavorite , watchRemoveFavorite
} from './handlers/ViewNewsSaga';

export default function* rootSaga() {
    yield all([
        watchFetchArticleonLoad(), watchFetchArticleonSearch(), watchLoadLanguages(),
        watchLoadRoles(), watchsignUpUser(), watchAddFavorite(),
        watchsignIn(), watchloadFavouriteArticle() , watchRemoveFavorite()
    ])
}