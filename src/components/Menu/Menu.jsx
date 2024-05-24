import { useState } from "react";
import effacer from "./effacer.svg";
import menu from "./menu.svg";

const Menu = ({ functionsURL }) => {
    const [menuActive, setMenuActive] = useState(false);

    const a = () => {
        setMenuActive(!menuActive)
        console.log(menuActive);
    }

    const menuClass = menuActive ? "h-screen overflow-hidden transition-all duration-500 z-40 top-0 left-0 w-full fixed bg-zinc-900" : "overflow-hidden transition-all duration-500 z-40 top-0 left-0 w-full fixed bg-zinc-900 h-0";

    return (
        <>
            <div className="z-60 bloc w-16 h-8">
                <img
                    onClick={() => setMenuActive(!menuActive)}
                    className="w-16 h-8 text-orange-600 border-2 border-orange-400 cursor-pointer hover:bg-orange-50 active:bg-orange-100 transition-all"
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
                                    functionsURL.popularMoviesURL()
                                    setMenuActive(!menuActive)
                                }}
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                            >
                                Популярные
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.topMoviesURL()
                                    setMenuActive(!menuActive)
                                }}
                            >
                                Топ 250
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.newMoviesURL()
                                    setMenuActive(!menuActive)
                                }}
                            >
                                Топ новинок
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-zinc-600 mb-4">Сериалы</h1>
                        <ul className="ml-4">
                            <li
                                onClick={() => {
                                    functionsURL.popularSeriesURL()
                                    setMenuActive(!menuActive)
                                }}
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                            >
                                Популярные
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.topSeriesURL()
                                    setMenuActive(!menuActive)
                                }}
                            >
                                Топ 250
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.newSeriesURL()
                                    setMenuActive(!menuActive)
                                }}
                            >
                                Топ новинок
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-zinc-600 mb-4">Мультфильмы</h1>
                        <ul className="ml-4">
                            <li
                                onClick={() => {
                                    functionsURL.popularAnimationsURL()
                                    setMenuActive(!menuActive)
                                }}
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                            >
                                Популярные
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.topAnimationsURL()
                                    setMenuActive(!menuActive)
                                }}
                            >
                                Топ 250
                            </li>

                            <li
                                className="mb-2 font-medium text-lg hover:text-orange-600 max-w-fit cursor-pointer transition-all"
                                onClick={() => {
                                    functionsURL.newAnimationsURL()
                                    setMenuActive(!menuActive)
                                }}
                            >
                                Топ новинок
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-zinc-600 mb-4">Репо/Связь</h1>
                        <ul className="ml-4">
                            <li className="mb-2 font-medium text-lg hover:text-zinc-400 max-w-fit cursor-pointer transition-all">GitHub</li>
                            <li className="mb-2 font-medium text-lg hover:text-sky-500 max-w-fit cursor-pointer transition-all">Мой тг</li>
                            <li className="mb-2 font-medium text-lg text-zinc-500 hover:text-zinc-50 max-w-fit cursor-pointer transition-all">Ну или почта хз</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;