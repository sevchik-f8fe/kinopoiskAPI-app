import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Menu from "./Menu/Menu";
import toggle from "./Header/log-out.svg";

const Header = ({ functionsURL }) => {
    const inputRef = useRef(null);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    window.onkeydown = (e) => {
        if (e.key === 'Enter' && inputRef.current.value.length > 0) {
            e.preventDefault();
            functionsURL.searchURL();
        }
    }

    return (
        <header>
            <nav className="bg-zinc-100 px-6 py-2.5 dark:bg-zinc-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <span className="self-center transition-all hover:scale-105 cursor-pointer active:scale-95 hover:bg-orange-100 bg-orange-50 dark:bg-orange-100 dark:txt-orange-600 shadow-lg py-2 px-4 rounded-xl text-xl font-bold whitespace-nowrap text-orange-600">Kinopoisk API</span>
                    </Link>


                    <form className="flex gap-6 items-center mx-auto order-1">
                        <Menu functionsURL={functionsURL} />

                        <label htmlFor="search" className="sr-only">Поиск</label>
                        <div className="relative w-full">
                            <input
                                ref={inputRef}
                                onChange={(e) => functionsURL.changeQueryHandler(e)}
                                type="text"
                                id="search"
                                className="block w-full p-2 text-md border outline-0 border-gray-200 focus:border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Дюна, Достать ножи,..."
                            />
                        </div>
                        <Link to="/">
                            <button
                                onClick={() => functionsURL.searchURL(true)}
                                type="button"
                                className="transition-all duration-100 inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white rounded-md bg-orange-600 focus:bg-orange-400 hover:bg-orange-500"
                            >
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>Поиск
                            </button>

                        </Link>
                    </form>

                    <div className="justify-between items-center flex w-auto order-2">
                        <ul className="flex font-medium flex-row items-center space-x-8">
                            <li>
                                <Link className="block text-sm font-medium p-1 text-zinc-500 hover:text-orange-600 dark:hover:text-orange-600 hover:border-orange-600 transition-all border-b border-zinc-400 dark:text-zinc-400" to="/drafts">
                                    Другие работы
                                </Link>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/sevchik-f8fe" className="block text-sm font-medium p-1 text-zinc-500 hover:text-orange-600 dark:hover:text-orange-600 hover:border-orange-600 transition-all border-b border-zinc-400 dark:text-zinc-400">GitHub</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://t.me/poooooooooooooooaa" className="block text-sm font-medium p-1 text-zinc-500 hover:text-orange-600 dark:hover:text-orange-600 hover:border-orange-600 transition-all border-b border-zinc-400 dark:text-zinc-400">Связь</a>
                            </li>
                            <li>
                                <button
                                    onClick={toggleTheme}
                                    className="p-1 transition-all dark:bg-zinc-500 bg-zinc-200 shadow-md hover:scale-105 active:scale-95 rounded-md"
                                >
                                    <img src={toggle} alt="toggle theme" className="w-5 h-5" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;