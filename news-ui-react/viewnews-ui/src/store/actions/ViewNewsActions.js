import * as Constants from './Constants';

// FIND_ARTICLE_ON_LOAD
export const findArticleOnLoad = () => {
    return {
        type: Constants.FIND_ARTICLE_ON_LOAD,
    }
}

// FIND_ARTICLE_ON_SEARCH
export const findArticleOnSearch = (searchText) => {
    return {
        type: Constants.FIND_ARTICLE_ON_SEARCH,
        payload: searchText
    }
}


//SEARCH_ARTICLE_SUCCESS
export const searchArticlesSuccess = (data) => {
    return {
        type: Constants.SEARCH_ARTICLE_SUCCESS,
        payload: data
    }
}

//ACTIVATE_LOADING
export const activateLoading = () => {
    return {
        type: Constants.ACTIVATE_LOADING
    }
}

//STOP_LOADING
export const stopLoading = () => {
    return {
        type: Constants.STOP_LOADING
    }
}


//SIGN_IN
export const logIn = (data) => {
    return {
        type: Constants.SIGN_IN,
        payload: data
    }
}

//LOG_OUT
export const logOut = () => {
    return {
        type: Constants.LOG_OUT
    }
}

//SIGN_IN_SUCCESS
export const logInSuccess = (data) => {
    return {
        type: Constants.SIGN_IN_SUCCESS,
        payload: data
    }
}

//SIGN_IN_FAILURE
export const logInFailure = (data) => {
    return {
        type: Constants.SIGN_IN_FAILURE,
        payload: data
    }
}


//SIGN_UP
export const signUp = (data) => {
    return {
        type: Constants.SIGN_UP,
        payload: data
    }
}



//SIGN_UP_FAILURE
export const signUpFailure = (data) => {
    return {
        type: Constants.SIGN_UP_FAILURE,
        payload: data
    }
}


//SIGN_UP_SUCCESS
export const signUpSuccess = (data) => {
    return {
        type: Constants.SIGN_UP_SUCCESS,
        payload: data
    }
}



//LOAD_FAVOURITE_ARTICLE
export const loadFavouriteArticle = (data) => {
    return {
        type: Constants.LOAD_FAVOURITE_ARTICLE,
        payload: data
    }
}

//LOAD_FAVOURITE_ARTICLE_SUCCESS
export const loadFavouriteArticleSuccess = (data) => {
    return {
        type: Constants.LOAD_FAVOURITE_ARTICLE_SUCCESS,
        payload: data
    }
}


//LOAD_FAVOURITE_ARTICLE_FAILURE
export const loadFavouriteArticleFailure = (data) => {
    return {
        type: Constants.LOAD_FAVOURITE_ARTICLE_FAILURE,
        payload: data
    }
}






//FETCH_LANGUAGES
export const loadLanguages = (data) => {
    return {
        type: Constants.FETCH_LANGUAGES,
        payload: data
    }
}

//FETCH_LANGUAGES_SUCCESS
export const loadLanguagesSuccess = (data) => {
    return {
        type: Constants.FETCH_LANGUAGES_SUCCESS,
        payload: data
    }
}


//FETCH_LANGUAGES_FAILURE
export const loadLanguagesFailure = (data) => {
    return {
        type: Constants.FETCH_LANGUAGES_FAILURE,
        payload: data
    }
}


//FETCH_ROLES
export const loadRoles = (data) => {
    return {
        type: Constants.FETCH_ROLES,
        payload: data
    }
}

//FETCH_ROLES_SUCCESS
export const loadRolesSuccess = (data) => {
    return {
        type: Constants.FETCH_ROLES_SUCCESS,
        payload: data
    }
}

//FETCH_ROLES_FAILURE
export const loadRolesFailure = (data) => {
    return {
        type: Constants.FETCH_ROLES_FAILURE,
        payload: data
    }
}



//CLEAR_SIGNUP
export const clearSignup = () => {
    return {
        type: Constants.CLEAR_SIGNUP,
    }
}


export const addFavorites = (data) => {
    return {
        type: Constants.ADD_ARTICLE_TO_FAVOURITE,
        payload: data
    }
}


export const addFavoritesSuccess = () => {
    return {
        type: Constants.ADD_ARTICLE_TO_FAVOURITE_SUCCESS,
    }
}

export const addFavoritesFailure = () => {
    return {
        type: Constants.ADD_ARTICLE_TO_FAVOURITE_FAILURE,
    }
}



export const removeFavorites = ({ articleId, userId }) => {
    return {
        type: Constants.REMOVE_ARTICLE_FROM_FAVOURITE,
        payload: { articleId, userId }
    }
}

export const removeFavoritesSuccess = (data) => {
    return {
        type: Constants.REMOVE_ARTICLE_FROM_FAVOURITE_SUCCESS,
        payload: data
    }
}

export const removeFavoritesFailure = (data) => {
    return {
        type: Constants.REMOVE_ARTICLE_FROM_FAVOURITE_FAILURE,
        payload: data
    }
}