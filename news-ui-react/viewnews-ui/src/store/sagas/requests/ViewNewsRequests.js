import axios from "axios";
import moment from "moment";

export const logIn = (action) => {
    let url = "http://localhost:8080/viewnews/login/authenticate";
    return axios.post(url, action.payload)
        .then((res) => res.data)
        .catch((err) => { throw err });
}


export const signUp = (action) => {
    let url = "http://localhost:8080/viewnews/signup/add";
    return axios.post(url, action.payload)
        .then((res) => res.data)
        .catch((err) => { throw err });
}


export const fetchRoles = () => {
    let url = "http://localhost:8080/viewnews/signup/roles";
    return axios.get(url)
        .then((res) => res.data)
        .catch((err) => { throw err });
}

export const fetchLanguages = () => {
    let url = "http://localhost:8080/viewnews/signup/languages";
    return axios.get(url)
        .then((res) => res.data)
        .catch((err) => { throw err });
}



export const loadArticleonLoad = () => {
    const url = "https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=71f791c2b2044004b9e096eb3ef76478";
    return axios.post(url)
        .then((res) => res.data)
        .catch((err) => { throw err });
}

export const loadArticleonSearch = (action) => {

    let yesterdayDate = moment(new Date(new Date().getTime() - 24 * 60 * 60 * 1000)).format('YYYY-MM-DD');
    let dateToday = moment(new Date()).format('YYYY-MM-DD')
    let url = "https://newsapi.org/v2/everything?q=" + action.payload + "&from=" + yesterdayDate
        + "&to=" + dateToday + "&sortBy=popularity&apiKey=71f791c2b2044004b9e096eb3ef76478";

    return axios.get(url)
        .then((res) => res.data)
        .catch((err) => { throw err });
}



export const loadFavouriteArticles = (action) => {
    let url = "http://localhost:8080/viewnews/article/showfavourite";

    let config = {
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('JWT_TOKEN')
        }
    }

    return axios.post(url, action.payload, config)
        .then((res) => res.data)
        .catch((err) => { throw err });
}



export const addArticlesAsFavourite = (action) => {
    let url = "http://localhost:8080/viewnews/article/favourite";
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('JWT_TOKEN')
        }
    }

    return axios.post(url, action.payload, config)
        .then((res) => res.data)
        .catch((err) => { throw err });
}


export const removeArticlesAsFavourite = (action) => {
    var data = JSON.stringify(action.payload.articleId);

    var config = {
        method: 'delete',
        url: 'http://localhost:8080/viewnews/article/favourite',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };


    return axios(config)
        .then((res) => res.data)
        .catch((err) => { throw err });
}



