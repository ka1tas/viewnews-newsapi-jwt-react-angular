import axios from "axios";
import moment from "moment";

export const getArticlesOnSearch = (term) => {
    let dateToday = moment(new Date()).format('YYYY-MM-DD')
    let searchNewsUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=71f791c2b2044004b9e096eb3ef76478";
    let data = {};
    axios.get(searchNewsUrl)
        .then(res => {
            data = res.data;;
        })
    console.log(data)
    return data;
}