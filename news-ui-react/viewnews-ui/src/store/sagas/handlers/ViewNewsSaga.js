import { call, put, takeEvery } from 'redux-saga/effects';
import * as Constants from '../../actions/Constants';
import {
    stopLoading, logInSuccess, signUpSuccess, searchArticlesSuccess, signUpFailure,loadFavouriteArticle,
    loadFavouriteArticleSuccess, loadRolesSuccess, loadLanguagesSuccess, addFavoritesSuccess ,removeFavoritesSuccess
} from '../../actions/ViewNewsActions';
import {
    logIn, signUp, fetchLanguages, fetchRoles, addArticlesAsFavourite,
    loadArticleonLoad, loadArticleonSearch, loadFavouriteArticles , removeArticlesAsFavourite
} from '../requests/ViewNewsRequests';


export function* watchFetchArticleonLoad() {
    yield takeEvery(Constants.FIND_ARTICLE_ON_LOAD, fetchArticleonLoad);
}

function* fetchArticleonLoad() {
    try {
        const data = yield call(loadArticleonLoad);
        yield put(searchArticlesSuccess(data));
        yield put(stopLoading());
    } catch {

    }
}


export function* watchFetchArticleonSearch() {
    yield takeEvery(Constants.FIND_ARTICLE_ON_SEARCH, fetchArticleonSearch);
}

function* fetchArticleonSearch(action) {
    try {
        const data = yield call(() => loadArticleonSearch(action));
        yield put(searchArticlesSuccess(data));
        yield put(stopLoading());
    } catch {

    }
}



export function* watchsignIn() {
    yield takeEvery(Constants.SIGN_IN, signIn);
}

function* signIn(action) {
    try {
        const data = yield call(() => logIn(action));
        yield put(logInSuccess(data));
    } catch (err) {
        console.log(err)
    }

}

export function* watchsignUpUser() {
    yield takeEvery(Constants.SIGN_UP, signUpUser);
}

function* signUpUser(action) {
    try {
        const data = yield call(() => signUp(action));
        console.log(data)
        yield put(signUpSuccess(data));
    } catch (err) {
        yield put(signUpFailure(err.response.data.errorMessage))
    }

}



export function* watchLoadRoles() {
    yield takeEvery(Constants.FETCH_ROLES, loadRoles);
}

function* loadRoles() {
    try {
        const data = yield call(fetchRoles);
        yield put(loadRolesSuccess(data));
    } catch (err) {
        console.log(err)
    }

}

export function* watchLoadLanguages() {
    yield takeEvery(Constants.FETCH_LANGUAGES, loadLanguages);
}

function* loadLanguages() {
    try {
        const data = yield call(fetchLanguages);
        yield put(loadLanguagesSuccess(data));
    } catch (err) {
        console.log(err)
    }

}






export function* watchloadFavouriteArticle() {
    yield takeEvery(Constants.LOAD_FAVOURITE_ARTICLE, fetchFavouriteArticle);
}

function* fetchFavouriteArticle(action) {
    try {
        const data = yield call(() => loadFavouriteArticles(action));
        yield put(stopLoading());
        yield put(loadFavouriteArticleSuccess(data));
    } catch (err) {
        console.log(err)
    }

}


export function* watchAddFavorite() {
    yield takeEvery(Constants.ADD_ARTICLE_TO_FAVOURITE, addFavorite);
}

function* addFavorite(action) {
    try {
        const data = yield call(() => addArticlesAsFavourite(action));
        yield put(addFavoritesSuccess())
        yield put(loadFavouriteArticle(action.payload.userId));
    } catch (err) {

    }
}


export function* watchRemoveFavorite() {
    yield takeEvery(Constants.REMOVE_ARTICLE_FROM_FAVOURITE, removeFavorite);
}

function* removeFavorite(action) {
    try {
        const data = yield call(() => removeArticlesAsFavourite(action));
        yield put(removeFavoritesSuccess())
        yield put(loadFavouriteArticle(action.payload.userId));
    } catch (err) {

    }
}


