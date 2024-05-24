import { useState, useEffect } from "react";
import { useParams, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TYPES } from "../data/data";

const MoviePage = ({ data }) => {
    const { movieId } = useParams();
    const movie = data.find((elem) => elem.id == movieId);

    const filteredByProfession = (prof) => {
        return movie.persons
            .filter((person) => {
                return person.enProfession === prof;
            })
            .map((person) => person.name || person.enName).join(', ');
    }

    const findByProp = (list, prop) => {
        const findRes = list.find((elem) => elem.slug === prop);
        return findRes.name;
    }

    return (!movie?.name) ? (
        <>
            <div className="w-full flex h-screen flex-col items-center justify-start">
                <svg className="animate-spin mt-24 h-20 w-20 z-50 border-b-4 rounded-full border-gray-500" viewBox="0 0 24 24" />
                <h1 className="font-semibold mt-8 text-4xl text-gray-500">Загрузка данных...</h1>
            </div>
        </>
    ) : (
        <>
            <div className="p-4 mt-16 flex justify-start gap-6 w-4/5 mx-auto relative">
                <div className="w-1/3 flex flex-col items-center gap-16">
                    <img src={movie.poster.url} alt="poster" />
                    {movie.videos ? (<iframe src={movie.videos.trailers[0].url} className="mb-8" width="100%" height="220px"></iframe>) : (<div></div>)}
                </div>

                <div className="w-2/3">
                    <h1 className="text-5xl font-bold mb-4 text-slate-800">{movie.name} ({movie.year})</h1>

                    {movie.rating.imdb && (<span className="font-bold text-lg bg-green-200 p-0.5 mr-2 rounded">{movie.rating.imdb} imdb</span>)}

                    {(movie.ageRating !== null) && (<span className="font-bold text-lg bg-pink-200 p-0.5 mr-2 rounded">{movie.ageRating}+</span>)}

                    {movie.top10 && (<span className="font-bold text-lg text-amber-500 border-2 border-amber-500 p-0.5 mr-2 rounded">TOP10</span>)}

                    {movie.top250 && (<span className="font-bold text-lg text-zinc-500 border-2 border-zinc-500 p-0.5 mr-2 rounded">TOP250</span>)}

                    <p className="font-medium mt-2 text-gray-700">{movie.description}</p>

                    <a className="inline-block m-6 bg-orange-600 hover:bg-orange-500 transition-all font-bold text-white px-4 py-2 rounded-2xl" href="#">Смотреть на Кинопоиск</a>

                    <table className="table-fixed mt-4 text-left">
                        <thead>
                            <tr>
                                <th className="text-2xl pb-4 w-2/5">О франшизе</th>
                                <th className="w-3/5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pb-2">Год производства</td>
                                <td>{movie.year}</td>
                            </tr>
                            <tr>
                                <td className="pb-2">Тип</td>
                                <td>{findByProp(TYPES, movie.type)}</td>
                            </tr>
                            <tr>
                                <td className="pb-2">Страна производства</td>
                                <td>
                                    {movie.countries.map((country) => country.name).join(', ')}
                                </td>
                            </tr>
                            <tr>
                                <td className="pb-2">Жанр</td>
                                <td>
                                    {movie?.genres.map((genre) => genre.name).join(', ')}
                                </td>
                            </tr>
                            <tr>
                                <td className="pb-2">Актёр</td>
                                {(filteredByProfession('actor').length > 0) ? (
                                    <td>
                                        {filteredByProfession('actor')}
                                    </td>
                                ) : (
                                    <td>-</td>
                                )}
                            </tr>
                            <tr>
                                <td className="pb-2">Режиссер</td>
                                {(filteredByProfession('director').length > 0) ? (
                                    <td>
                                        {filteredByProfession('director')}
                                    </td>
                                ) : (
                                    <td>{'-'}</td>
                                )}
                            </tr>
                            <tr>
                                <td className="pb-2">Продюсер</td>
                                {(filteredByProfession('producer').length > 0) ? (
                                    <td>
                                        {filteredByProfession('producer')}
                                    </td>
                                ) : (
                                    <td>{'-'}</td>
                                )}
                            </tr>
                            <tr>
                                <td className="pb-2">Композитор</td>
                                {(filteredByProfession('composer').length > 0) ? (
                                    <td>
                                        {filteredByProfession('composer')}
                                    </td>
                                ) : (
                                    <td>{'-'}</td>
                                )}
                            </tr>
                            <tr>
                                <td className="pb-2">Оператор</td>
                                {(filteredByProfession('operator').length > 0) ? (
                                    <td>
                                        {filteredByProfession('operator')}
                                    </td>
                                ) : (
                                    <td>{'-'}</td>
                                )}
                            </tr>
                            <tr>
                                <td className="pb-2">Монтажёр</td>
                                {(filteredByProfession('editor').length > 0) ? (
                                    <td>
                                        {filteredByProfession('editor')}
                                    </td>
                                ) : (
                                    <td>{'-'}</td>
                                )}
                            </tr>
                            <tr>
                                <td className="pb-2">Художники</td>
                                {(filteredByProfession('designer').length > 0) ? (
                                    <td>
                                        {filteredByProfession('designer')}
                                    </td>
                                ) : (
                                    <td>{'-'}</td>
                                )}
                            </tr>
                            <tr>
                                <td className="pb-2">Актёры дубляжа</td>
                                {(filteredByProfession('voice_actor').length > 0) ? (
                                    <td>
                                        {filteredByProfession('voice_actor')}
                                    </td>
                                ) : (
                                    <td>{'-'}</td>
                                )}
                            </tr>
                            <tr>
                                <td className="pb-2">Редакторы</td>
                                {(filteredByProfession('writer').length > 0) ? (
                                    <td>
                                        {filteredByProfession('writer')}
                                    </td>
                                ) : (
                                    <td>{'-'}</td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MoviePage;