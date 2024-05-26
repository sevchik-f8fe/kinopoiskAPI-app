import { Link } from "react-router-dom";
import { useRef } from "react";
import Menu from "./Menu/Menu";

const Header = ({ functionsURL }) => {
    const inputRef = useRef(null);

    window.onkeydown = (e) => {
        if (e.key === 'Enter' && inputRef.current.value.length > 0) {
            e.preventDefault();
            functionsURL.searchURL();
        }
    }

    return (
        <header className="mb-4">
            <nav className="bg-white border-b-2 border-gray-200 px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <span className="self-center transition-all hover:scale-110 cursor-pointer active:scale-95 hover:bg-orange-100 bg-orange-50 shadow-md py-2 px-4 rounded-xl text-xl font-bold whitespace-nowrap text-orange-500">Kinopoisk API</span>
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
                                onClick={() => functionsURL.searchURL()}
                                type="button"
                                className="transition-all duration-100 inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white rounded-md bg-orange-500 focus:bg-orange-400 hover:bg-orange-600"
                            >
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>Поиск
                            </button>

                        </Link>
                    </form>

                    <div className="justify-between items-center flex w-auto order-2">
                        <ul className="flex font-medium flex-row space-x-8">
                            <li>
                                <Link className="block text-sm font-medium px-1 py-2 text-gray-500 hover:text-orange-600 hover:border-orange-300 transition-all border-b border-gray-300 dark:text-gray-400" to="/drafts">
                                    Другие работы
                                </Link>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/sevchik-f8fe" className="block text-sm font-medium px-1 py-2 text-gray-500 hover:text-orange-600 hover:border-orange-300 transition-all border-b border-gray-300 dark:text-gray-400">GitHub</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://t.me/poooooooooooooooaa" className="block text-sm font-medium px-1 py-2 text-gray-500 hover:text-orange-600 hover:border-orange-300 transition-all border-b border-gray-300 dark:text-gray-400">Связь</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;