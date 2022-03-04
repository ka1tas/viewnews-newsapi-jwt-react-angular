import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Masonry from 'react-masonry-css';
import Article from '../article/Article';
import { loadFavouriteArticle, activateLoading, removeFavorites } from '../../store/actions/ViewNewsActions';

const breakPointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
};

const Favourite = () => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles.favouriteArticles);
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (articles?.length < 1) {
            dispatch(activateLoading());
            dispatch(loadFavouriteArticle(user.user.id))
        }
    }, [])



    const removeFavoritesArticle = (article) => {
        if (user?.user !== null) {
            dispatch(removeFavorites({ articleId: article.id, userId: user?.user.id }));
        }
    }


    return (
        <div>
            <div className="w-full flex justify-center my-2 text-2xl text-slate-700 drop-shadow-lg ">
                {articles.length > 0 && <h1> Here are your favourite news </h1>}
            </div>
            {articles.length > 0 ?

                <div className="flex flex-row justify-center items-center ">
                    <Masonry className="flex animate-slide-fwd " breakpointCols={breakPointObj}>
                        {articles?.map((article, index) => (
                            <Article key={index} article={article}
                                favouriteArticles={articles} removeFavoritesArticle={removeFavoritesArticle}
                                className="w-max" />
                        ))}
                    </Masonry>
                </div>
                :
                <div className="w-full flex justify-center my-2 text-2xl text-slate-700 drop-shadow-lg ">
                    <h1>You have not saved any news to your favourites. </h1>
                </div>

            }

        </div>
    )
}

export default Favourite