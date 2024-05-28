import { useParams, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TYPES } from "../data/data";
import ShowReviews from "../components/ShowReviews/ShowReviews";

const MoviePage = ({ data }) => {
    const { movieId } = useParams();
    const movie = data.find((elem) => elem.id == movieId);

    const filteredByProfession = (prof) => {
        if (movie.persons) {
            return movie?.persons
                .filter((person) => {
                    return person?.enProfession === prof;
                })
                .map((person) => person?.name || person?.enName).join(', ');
        }
        else {
            return [];
        }

    }

    const findByProp = (list, prop) => {
        const findRes = list.find((elem) => elem.slug === prop);
        return findRes.name;
    }

    return (!movie?.name) ? (
        <div className="dark:bg-zinc-800">
            <div className="w-full flex h-screen flex-col items-center justify-start">
                <svg className="animate-spin mt-24 h-20 w-20 z-50 border-b-4 rounded-full border-zinc-400" viewBox="0 0 24 24" />
                <h1 className="font-semibold mt-8 text-4xl text-zinc-500">Загрузка данных...</h1>
            </div>
        </div>
    ) : (
        <div className="dark:bg-zinc-800">
            <div className="p-4 mt-16 flex justify-start gap-6 w-4/5 mx-auto relative">
                <div className="w-1/3 flex flex-col items-center gap-16">
                    <img src={movie.poster.url} alt="poster" />
                    {movie?.videos?.trailers[0] ? (<iframe src={movie.videos.trailers[0].url} className="mb-8" width="100%" height="220px"></iframe>) : (<div></div>)}
                </div>

                <div className="w-2/3">
                    <h1 className="text-5xl font-bold mb-4 text-zinc-800 dark:text-white">{movie.name} ({movie.year})</h1>

                    {movie.rating.imdb && (<span className="font-bold text-lg bg-green-200 dark:bg-green-700 dark:text-white p-1 mr-2 rounded">{movie.rating.imdb} imdb</span>)}

                    {(movie.ageRating !== null) && (<span className="font-bold text-lg dark:bg-red-700 dark:text-whitedark:bg-emerald-600 dark:text-white bg-red-200 p-1 mr-2 rounded">{movie.ageRating}+</span>)}

                    {movie.top10 && (<span className="font-bold text-lg text-yellow-500 border-2 border-yellow-500 p-1 mr-2 rounded">TOP10</span>)}

                    {movie.top250 && (<span className="font-bold text-lg text-zinc-500 border-2 border-zinc-500 p-1 mr-2 rounded">TOP250</span>)}

                    <p className="font-medium mt-2 text-zinc-700 dark:text-zinc-200">{movie.description}</p>

                    {movie?.externalId?.kpHD && (
                        <a
                            target="_blank"
                            className="inline-block m-6 bg-orange-600 hover:bg-orange-500 transition-all font-bold text-white px-4 py-2 rounded-2xl"
                            href={`https://hd.kinopoisk.ru/film/${movie?.externalId?.kpHD}`}
                        >
                            Смотреть на Кинопоиск
                        </a>
                    )}

                    <table className="table-fixed mt-4 text-left">
                        <thead>
                            <tr className="dark:border-b-zinc-600">
                                <th className="text-2xl dark:text-zinc-100 pb-4 w-2/5">О франшизе</th>
                                <th className="w-3/5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="dark:border-b-zinc-600">
                                <td className="pb-2 dark:text-zinc-500">Год производства</td>
                                <td className="dark:text-zinc-200">{movie.year}</td>
                            </tr>
                            <tr className="dark:border-b-zinc-600">
                                <td className="pb-2 dark:text-zinc-500">Тип</td>
                                <td className="dark:text-zinc-200">{findByProp(TYPES, movie.type)}</td>
                            </tr>
                            <tr className="dark:border-b-zinc-600">
                                <td className="pb-2 dark:text-zinc-500">Страна производства</td>
                                <td className="dark:text-zinc-200">
                                    {movie.countries.map((country) => country.name).join(', ')}
                                </td>
                            </tr>
                            <tr className="dark:border-b-zinc-600">
                                <td className="pb-2 dark:text-zinc-500">Жанр</td>
                                <td className="dark:text-zinc-200">
                                    {movie?.genres.map((genre) => genre.name).join(', ')}
                                </td>
                            </tr>
                            {movie?.persons && (
                                <>
                                    <tr className="dark:border-b-zinc-600">
                                        <td className="pb-2 dark:text-zinc-500">Актёр</td>
                                        {(filteredByProfession('actor').length > 0 && movie.persons[0]) ? (
                                            <td className="dark:text-zinc-200">
                                                {filteredByProfession('actor')}
                                            </td>
                                        ) : (
                                            <td className="dark:text-zinc-200">-</td>
                                        )}
                                    </tr>
                                    <tr className="dark:border-b-zinc-600">
                                        <td className="pb-2 dark:text-zinc-500">Режиссер</td>
                                        {(filteredByProfession('director').length > 0 && movie.persons) ? (
                                            <td className="dark:text-zinc-200">
                                                {filteredByProfession('director')}
                                            </td>
                                        ) : (
                                            <td className="dark:text-zinc-200">{'-'}</td>
                                        )}
                                    </tr>
                                    <tr className="dark:border-b-zinc-600">
                                        <td className="pb-2 dark:text-zinc-500">Продюсер</td>
                                        {(filteredByProfession('producer').length > 0 && movie.persons) ? (
                                            <td className="dark:text-zinc-200">
                                                {filteredByProfession('producer')}
                                            </td>
                                        ) : (
                                            <td className="dark:text-zinc-200">{'-'}</td>
                                        )}
                                    </tr>
                                    <tr className="dark:border-b-zinc-600">
                                        <td className="pb-2 dark:text-zinc-500">Композитор</td>
                                        {(filteredByProfession('composer').length > 0 && movie.persons) ? (
                                            <td className="dark:text-zinc-200">
                                                {filteredByProfession('composer')}
                                            </td>
                                        ) : (
                                            <td className="dark:text-zinc-200">{'-'}</td>
                                        )}
                                    </tr>
                                    <tr className="dark:border-b-zinc-600">
                                        <td className="pb-2 dark:text-zinc-500">Оператор</td>
                                        {(filteredByProfession('operator').length > 0 && movie.persons) ? (
                                            <td className="dark:text-zinc-200">
                                                {filteredByProfession('operator')}
                                            </td>
                                        ) : (
                                            <td className="dark:text-zinc-200">{'-'}</td>
                                        )}
                                    </tr>
                                    <tr className="dark:border-b-zinc-600">
                                        <td className="pb-2 dark:text-zinc-500">Монтажёр</td>
                                        {(filteredByProfession('editor').length > 0 && movie.persons) ? (
                                            <td className="dark:text-zinc-200">
                                                {filteredByProfession('editor')}
                                            </td>
                                        ) : (
                                            <td className="dark:text-zinc-200">{'-'}</td>
                                        )}
                                    </tr>
                                    <tr className="dark:border-b-zinc-600">
                                        <td className="pb-2 dark:text-zinc-500">Художники</td>
                                        {(filteredByProfession('designer').length > 0 && movie.persons) ? (
                                            <td className="dark:text-zinc-200">
                                                {filteredByProfession('designer')}
                                            </td>
                                        ) : (
                                            <td className="dark:text-zinc-200">{'-'}</td>
                                        )}
                                    </tr>
                                    <tr className="dark:border-b-zinc-600">
                                        <td className="pb-2 dark:text-zinc-500">Актёры дубляжа</td>
                                        {(filteredByProfession('voice_actor').length > 0 && movie.persons) ? (
                                            <td className="dark:text-zinc-200">
                                                {filteredByProfession('voice_actor')}
                                            </td>
                                        ) : (
                                            <td className="dark:text-zinc-200">{'-'}</td>
                                        )}
                                    </tr>
                                    <tr className="dark:border-b-zinc-600">
                                        <td className="pb-2 dark:text-zinc-500">Редакторы</td>
                                        {(filteredByProfession('writer').length > 0 && movie.persons) ? (
                                            <td className="dark:text-zinc-200">
                                                {filteredByProfession('writer')}
                                            </td>
                                        ) : (
                                            <td className="dark:text-zinc-200">{'-'}</td>
                                        )}
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>

                    <ShowReviews movieId={movie.id} />
                </div>
            </div>
        </div>
    )
}

export default MoviePage;