import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdSearch } from 'react-icons/io';
import Masonry from 'react-masonry-css';
import Article from '../article/Article';
import Spinner from '../spinner/Spinner';
import {
  findArticleOnLoad, findArticleOnSearch,
  activateLoading, addFavorites, removeFavorites, loadFavouriteArticle
} from '../../store/actions/ViewNewsActions';


const breakPointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const Home = () => {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.searchArticles);
  const loading = useSelector(state => state.articles.isLoading);
  const favouriteArticles = useSelector(state => state.articles.favouriteArticles);
  const user = useSelector(state => state.user);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (favouriteArticles?.length < 1) {
      if (user?.user !== null) {
        dispatch(loadFavouriteArticle(user?.user?.id))
      }

    }
  }, [])



  useEffect(() => {
    if (articles.length === 0) {
      dispatch(activateLoading())
      dispatch(findArticleOnLoad());
    }
  }, [])


  const searchNews = (term) => {
    setSearchTerm(term);
    if (term.length > 4) {
      dispatch(activateLoading())
      dispatch(findArticleOnSearch(term));
    }
  }

  const addFavoritesArticle = (article) => {
    if (user?.user !== null) {
      dispatch(addFavorites({ article, userId: user?.user?.id }));
    }
  }

  const removeFavoritesArticle = (article) => {
    let articleId = article.id;
    if (user?.user !== null) {
      if (articleId === null || articleId === undefined) {
        favouriteArticles.map(fav => {
          if (fav.title === article.title) {
            articleId = fav.id;
          }
        })
      }
      dispatch(removeFavorites({ articleId: articleId, userId: user.user.id }));
    }
  }



  return (
    <div className="container mx-auto min-h-full ">

      <div className="flex flex-row justify-center p-5">
        <div className="flex justify-center bg-slate-100 items-center px-2 w-3/4 border-none outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input
            type="text"
            onChange={(e) => searchNews(e.target.value)}
            placeholder="Search News"
            value={searchTerm}
            className="p-2 w-full bg-slate-100 outline-none"
          />
        </div>
      </div>
      <div>
        {articles.length > 0 &&
          <div className="w-full flex justify-center my-2 text-2xl text-slate-700 drop-shadow-lg ">
            <h1>Top News Now</h1>
          </div>
        }
      </div>
      <div>
        {articles.length > 0 ?
          <div className="flex flex-row justify-center items-center ">
            <Masonry className="flex animate-slide-fwd " breakpointCols={breakPointObj}>
              {articles?.map((article, index) => (<Article key={index} article={article}
                favouriteArticles={favouriteArticles} addFavoritesArticle={addFavoritesArticle} removeFavoritesArticle={removeFavoritesArticle}
                className="w-max" />))}
            </Masonry>
          </div>

          :
          <div>
            {loading && <Spinner message="We are searching for relavent news. Kindly wait!" />}
            {!loading && <div className="w-full flex justify-center my-2 text-2xl text-slate-700 drop-shadow-lg ">
              <h2 className="flex w-full justify-center"> No News to Show</h2>
            </div>
            }
          </div>

        }

      </div>


    </div>
  )
}

export default Home