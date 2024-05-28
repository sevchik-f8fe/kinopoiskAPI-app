const ListItem = ({ isShow, item, chooseItemClickHandler }) => {
    const minDescription = (desc) => {
        let arrDesc = desc.split(' ');
        return (arrDesc.length > 1) ? arrDesc.slice(0, 16).join(' ') + '...' : '';
    }

    const classNameActive = isShow ? "scale-95 bg-orange-50 dark:bg-zinc-800" : "dark:bg-zinc-900 cursor-pointer bg-white hover:bg-orange-50 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95";

    return (item.poster.url && item.name && item.year && (item.rating.imdb > 0)) ? (
        <li data-index={item.id} className={`${classNameActive} flex border transition-all dark:border-zinc-600 border-b-orange-600 rounded justify-between w-11/12 m-4 p-4 gap-4`} onClick={chooseItemClickHandler}>
            <img className="w-24" src={item.poster.url} alt="poster" />

            <div className="flex-grow">
                <h1 className="font-semibold text-zinc-800 dark:text-white text-xl mb-2">"{item.name}"<span className="font-normal text-lg">, {item.year}</span></h1>
                {item?.description?.split(' ').length > 1 ? (<p className="font-light dark:text-zinc-200 p-1 rounded">{minDescription(item.description)}</p>) : (<p></p>)}
            </div>

            <span className="bg-green-100 dark:bg-green-700 dark:text-white rounded font-semibold p-1 self-start">{item.rating.imdb}</span>
        </li>
    ) : (<></>)

}

export default ListItem;