import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";

import prev from "./HomePage/angle-circle-left.svg";
import next from "./HomePage/angle-circle-right.svg";

const HomePage = ({ data, paginationProps, isLoading }) => {
    const [showItem, setShowItem] = useState(null);

    const chooseItemClickHandler = (e) => {
        const id = +e.currentTarget.dataset.index;
        const elem = data.find(item => item.id === id);
        setShowItem(elem);
    }

    return (
        <>
            <div className="w-full dark:bg-zinc-800 py-4 flex justify-between gap-2">
                {!isLoading ? (
                    <ul className=" mt-6 mb-12 w-2/5">
                        {data.map((item) => {
                            return <ListItem data-index={item.id} isShow={item === showItem} key={item.id} item={item} chooseItemClickHandler={chooseItemClickHandler} />
                        })}
                        <li>
                            <Pagination paginationProps={paginationProps} />
                        </li>
                    </ul>
                ) : (
                    <div className="w-2/5 mt-6 mb-12 flex min-h-64 flex-col items-center justify-center">
                        <svg className="animate-spin mt- h-12 w-12 border-b-2 rounded-full border-zinc-400" viewBox="0 0 24 24" />
                    </div>
                )}

                <ShowingItem showItem={showItem} />

            </div>
        </>
    );
}

const ShowingItem = ({ showItem }) => {
    return (showItem === null || showItem === undefined) ? (
        <div className="self-start top-6 sticky mt-6 mb-12 p-4 w-3/5 flex justify-center">
            <h1 className="font-bold text-6xl text-zinc-300 dark:text-zinc-600">Кликни на табличку с фильмом...</h1>
        </div>
    ) : (
        <div className="self-start top-6 sticky mt-6 mb-12 p-4 w-3/5 flex justify-between gap-1">
            <div className="relative w-3/5 px-2 py-1">
                <h1 className="z-10 text-4xl font-bold mb-4 text-zinc-700 dark:text-white max-w-max">{showItem?.name} ({showItem?.year})</h1>
                <span className="font-bold text-lg inline-block bg-green-200 dark:bg-green-700 dark:text-white px-1 rounded">{showItem?.rating?.imdb}</span>

                <p className="pt-2">
                    <span className="inline-block max-w-fit text-zinc-400 dark:text-zinc-500 font-medium text-lg pr-2">{showItem?.countries.map((country) => country.name).join(', ')}</span>
                </p>

                <div className="mt-2">
                    {showItem?.genres.map((genre) => <span key={genre.name} className="inline-block max-w-fit text-white rounded-md bg-orange-600 font-medium text-sm align-baseline pb-1 px-1 mr-2">{genre.name}</span>)}
                </div>

                <p className="font-medium mt-2 text-zinc-700 dark:text-zinc-200">{showItem?.description}</p>

                <Link className="block max-w-fit mt-6 font-medium text-lg text-orange-600 transition-all hover:text-orange-500 hover:scale-105 active:scale-95 dark:hover:bg-zinc-950 dark:bg-zinc-900 hover:bg-zinc-800 bg-zinc-700 py-1 px-2 rounded-md shadow-lg" to={`/movies/${showItem.id}`}>
                    Показать полностью
                </Link>

                {showItem?.externalId?.kpHD && (
                    <a
                        target="_blank"
                        href={`https://hd.kinopoisk.ru/film/${showItem?.externalId?.kpHD}`}
                        className="block max-w-fit mt-6 font-medium text-md text-white transition-all hover:bg-zinc-500 dark:bg-zinc-600 dark:hover:bg-zinc-700 bg-zinc-400 py-1 px-2 rounded-md shadow-lg"
                    >
                        Открыть Кинопоиск
                    </a>
                )}

            </div>

            <div className="relative w-2/5 px-2 py-1">
                <img className="shadow-xl" src={showItem?.poster?.url} alt="mov" />
            </div>

        </div>
    )
}

const Pagination = ({ paginationProps }) => {

    const { onNextPageClick, onPrevPageClick, rightIsDisable, leftIsDisable, current, total } = paginationProps;

    return (
        <div className="flex justify-center items-center gap-4 py-2">
            <button
                className="bg-zinc-50 dark:bg-zinc-600 dark:hover:bg-zinc-500 transition-all hover:bg-zinc-200 hover:scale-105 rounded-md p-1 active:scale-95"
                type="button"
                onClick={onPrevPageClick}
                disabled={leftIsDisable}
            >
                <img
                    src={prev}
                    alt="previous page"
                    className="w-6 h-6"
                />
            </button>

            <span className="font-medium text-zinc-400 dark:text-zinc-500">
                {current} / {total}
            </span>

            <button
                className="bg-zinc-50 dark:bg-zinc-600 dark:hover:bg-zinc-500 transition-all hover:bg-zinc-200 hover:scale-105 rounded-md p-1 active:scale-95"
                type="button"
                onClick={onNextPageClick}
                disabled={rightIsDisable}
            >
                <img
                    src={next}
                    alt="next page"
                    className="w-6 h-6"
                />
            </button>
        </div>
    );
}

export default HomePage;