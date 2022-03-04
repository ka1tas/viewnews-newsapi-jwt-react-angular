import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDownloadForOffline } from 'react-icons/md';
import { MdBookmarkAdd } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const Article = ({ article, favouriteArticles, addFavoritesArticle, removeFavoritesArticle }) => {

    const navigate = useNavigate();
    const [postHovered, setPostHovered] = useState(false);
    const [alreadySaved, setAlreadySaved] = useState(false);

    useEffect(() => {

        let count = 0;
        favouriteArticles?.map(favArticle => {
            if (favArticle.title === article.title) {
                count++;
            }
        })
        if (count > 0) {
            setAlreadySaved(true);
        } else {
            setAlreadySaved(false);
        }

    }, [article, favouriteArticles])


    return (
        <div className=" border-2 rounded-lg m-2">
            <div
                onMouseEnter={() => setPostHovered(true)}
                onMouseLeave={() => setPostHovered(false)}
                className="relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
            >
                <img src={article?.urlToImage} alt="pin" className="rounded-lg w-full" />

                {postHovered && (
                    <div className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pt-2 pr-2 pb-2 z-50">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <a
                                    href={`${article?.urlToImage}?dl=`}
                                    target="_blank"
                                    rel="noreferrer"
                                    download
                                    onClick={(e) => e.stopPropagation()}
                                    className="bg-white w-6 h-6 rounded-full flex justify-center items-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                                >
                                    <MdDownloadForOffline />
                                </a>
                            </div>

                            {alreadySaved ? (
                                <button
                                    type="button"
                                    className="bg-red-500 flex flex-row justify-center items-center opacity-70 hover:opacity-100 text-white fpnt-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFavoritesArticle(article);
                                    }}
                                >
                                    <AiTwotoneDelete /> Remove
                                </button>
                            )
                                : (
                                    <button
                                        type="button"
                                        className="bg-red-500 flex flex-row justify-center items-center opacity-70 hover:opacity-100 text-white fpnt-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outlined-none"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addFavoritesArticle(article);
                                        }}
                                    >
                                        <MdBookmarkAdd /> save
                                    </button>
                                )}
                        </div>
                        <div className="flex justify-between items-center gap-2 w-full">

                            <a
                                href={article?.url}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white flex items-center gap-2 text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md "
                                onClick={(e) => e.stopPropagation()}
                            >
                                <BsFillArrowUpRightCircleFill />
                                View Story
                            </a>

                        </div>
                    </div>
                )}

            </div>
            <div>
                <div className="bg-black text-white p-2">{article?.title}</div>
                <div className="bg-slate-100 text-black p-2">
                    {article?.description?.length > 120 ?
                        <div>
                            {article?.description.slice(0, 120)}...   <a
                                href={article.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-500"
                                onClick={(e) => e.stopPropagation()}
                            >
                                read more
                            </a>
                        </div>
                        :
                        <div>
                            {article?.description}   <a
                                href={article.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-500"
                                onClick={(e) => e.stopPropagation()}
                            >
                                read more
                            </a>
                        </div>}
                </div>
            </div>

        </div>
    )
}

export default Article