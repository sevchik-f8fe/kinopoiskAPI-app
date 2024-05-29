import { useState } from "react";
import effacer from "./effacer.svg";
import menu from "./menu.svg";
import { Link } from "react-router-dom";

const Menu = ({ functionsURL }) => {
    const [menuActive, setMenuActive] = useState(false);

    const menuClass = menuActive ? "h-screen overflow-hidden transition-all duration-500 z-40 top-0 left-0 w-full fixed bg-zinc-900" : "overflow-hidden transition-all duration-500 z-40 top-0 left-0 w-full fixed bg-zinc-900 h-0";

    return (
        <>
            <div className="z-60 bloc w-16 h-8">
                <img
                    onClick={() => setMenuActive(!menuActive)}
                    className="w-16 h-8 text-orange-600 border-2 border-orange-400 cursor-pointer dark:hover:bg-zinc-800 dark:active:bg-zinc-700 hover:bg-orange-50 active:bg-orange-100 transition-all"
                    src={menu} alt="menu"
                />
            </div>

            <div className={menuClass}>
                <div className="flex justify-around h-32 items-center w-full">
                    <h1 className="self-center text-xl rounded-xl bg-orange-600 font-bold whitespace-nowrap px-2 py-1 text-zinc-50">Kinopoisk API</h1>
                    <img
                        onClick={() => setMenuActive(!menuActive)}
                        className="w-8 h-8 text-orange-600 border-2 border-orange-400 cursor-pointer hover:bg-zinc-800 active:bg-zinc-700 transition-all"
                        src={effacer}
                        alt="effacer"
                    />
                </div>

                <div className="text-zinc-50 flex justify-evenly gap-10 flex-wrap mt-16">
                    <div>
                        <h1 className="text-3xl font-bold text-zinc-600 mb-4">Фильмы</h1>
                        <ul className="ml-4">
                            <li
                                onClick={() => {
                                    functionsURL.popularMoviesURL(true)
                                    setMenuActive(!menuActive)
                                }}
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                            >
                                <Link to='/'>
                                    Популярные
                                </Link>
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.topMoviesURL(true)
                                    setMenuActive(!menuActive)
                                }}
                            >
                                <Link to='/'>
                                    Топ 250
                                </Link>
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.newMoviesURL(true)
                                    setMenuActive(!menuActive)
                                }}
                            >
                                <Link to='/'>
                                    Топ новинок
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-zinc-600 mb-4">Сериалы</h1>
                        <ul className="ml-4">
                            <li
                                onClick={() => {
                                    functionsURL.popularSeriesURL(true)
                                    setMenuActive(!menuActive)
                                }}
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                            >
                                <Link to='/'>
                                    Популярные
                                </Link>
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.topSeriesURL(true)
                                    setMenuActive(!menuActive)
                                }}
                            >
                                <Link to='/'>
                                    Топ 250
                                </Link>
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.newSeriesURL(true)
                                    setMenuActive(!menuActive)
                                }}
                            >
                                <Link to='/'>
                                    Топ новинок
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-zinc-600 mb-4">Мультфильмы</h1>
                        <ul className="ml-4">
                            <li
                                onClick={() => {
                                    functionsURL.popularAnimationsURL(true)
                                    setMenuActive(!menuActive)
                                }}
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                            >
                                <Link to='/'>
                                    Популярные
                                </Link>
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.topAnimationsURL(true)
                                    setMenuActive(!menuActive)
                                }}
                            >
                                <Link to='/'>
                                    Топ 250
                                </Link>
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.newAnimationsURL(true)
                                    setMenuActive(!menuActive)
                                }}
                            >
                                <Link to='/'>
                                    Топ новинок
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-zinc-600 mb-4">Репо/Связь</h1>
                        <ul className="ml-4">
                            <li className="mb-2 font-medium text-lg hover:text-zinc-400 max-w-fit cursor-pointer transition-all">
                                <a target="_blank" href="https://github.com/sevchik-f8fe/kinopoiskAPI-app">
                                    GitHub
                                </a>
                            </li>
                            <li className="mb-2 font-medium text-lg hover:text-sky-500 max-w-fit cursor-pointer transition-all">
                                <a target="_blank" href="https://t.me/poooooooooooooooaa">
                                    Мой тг
                                </a>
                            </li>
                            <li className="mb-2 font-medium text-lg text-zinc-500 hover:text-zinc-50 max-w-fit cursor-pointer transition-all">
                                <a href="mailto: kononovseva0627@gmail.com">
                                    Ну или почта хз
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;