import { useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";

const HomePage = ({ data }) => {
    const [showItem, setShowItem] = useState(null);

    const chooseItemClickHandler = (e) => {
        const id = +e.currentTarget.dataset.index;
        const elem = data.find(item => item.id === id);
        setShowItem(elem);
    }

    return (
        <div className="w-full flex justify-between gap-2">
            <ul className="my-12 w-2/5">
                {data.map((item) => {
                    return <ListItem data-index={item.id} isShow={item === showItem} key={item.id} item={item} chooseItemClickHandler={chooseItemClickHandler} />
                })}
            </ul>

            <ShowingItem showItem={showItem} />
        </div>
    );
}

const ShowingItem = ({ showItem }) => {
    return (showItem === null || showItem === undefined) ? (
        <>
            <div className="self-start top-12 sticky my-12 p-4 w-3/5 flex justify-center">
                <h1 className="font-bold text-6xl text-gray-300">Кликни на табличку с фильмом...</h1>
            </div>
        </>
    ) : (
        <>

            <div className="self-start top-12 sticky my-12 p-4 w-3/5 flex justify-between gap-1">
                <div className="relative w-3/5 px-2 py-1">
                    <h1 className="z-10 text-5xl font-bold mb-4 text-slate-800 max-w-max">{showItem?.name}<span className="font-medium text-2xl"><br />{showItem?.year}</span></h1>
                    <span className="font-bold text-xl bg-emerald-100 p-1 rounded">{showItem?.rating?.imdb} imdb</span>

                    <p className="pt-2">
                        <span className="inline-block max-w-fit text-gray-400 font-medium text-lg pr-2">{showItem?.countries.map((country) => country.name).join(', ')}</span>
                    </p>

                    <div className="mt-2">
                        {showItem?.genres.map((genre) => <span key={genre.name} className="inline-block max-w-fit text-white rounded-md bg-orange-500 font-medium text-sm align-baseline pb-1 px-1 mr-2">{genre.name}</span>)}
                    </div>

                    <p className="font-medium mt-2 text-gray-700">{showItem?.description}</p>

                    <Link className="block max-w-fit mt-6 font-medium text-lg text-orange-400 transition-all hover:text-orange-400 hover:scale-105 active:scale-95 hover:bg-zinc-900 bg-zinc-700 py-1 px-2 rounded-md shadow-lg" to={`/movies/${showItem.id}`}>
                        Показать полностью
                    </Link>

                    {showItem?.externalId?.kpHD && (
                        <a
                            target="_blank"
                            href={`https://hd.kinopoisk.ru/film/${showItem?.externalId?.kpHD}`}
                            className="block max-w-fit mt-6 font-medium text-md text-white transition-all hover:bg-zinc-500 bg-zinc-400 py-1 px-2 rounded-md shadow-lg"
                        >
                            Открыть Кинопоиск
                        </a>
                    )}

                </div>

                <div className="relative w-2/5 px-2 py-1">
                    <img className="shadow-xl" src={showItem?.poster?.url} alt="mov" />
                </div>

            </div>
        </>
    )

}

export default HomePage;