const ListItem = ({ isShow, item, chooseItemClickHandler }) => {
    const minDescription = (desc) => {
        let arrDesc = desc.split(' ');
        return (arrDesc.length > 1) ? arrDesc.slice(0, 16).join(' ') + '...' : '';
    }

    const classNameActive = isShow ? "flex border transition-all scale-95 border-b-orange-600 rounded justify-between w-11/12 cursor-pointer m-4 p-4 gap-4 bg-orange-50" : "flex border border-b-orange-600 rounded justify-between w-11/12 cursor-pointer m-4 p-4 gap-4 bg-white hover:bg-orange-50 hover:scale-105 active:scale-95 transition-all";

    return (item.poster.url && item.name && item.year && (item.rating.imdb > 0)) ? (
        <li data-index={item.id} className={classNameActive} onClick={chooseItemClickHandler}>
            <img className="w-20" src={item.poster.url} alt="poster" />

            <div className="flex-grow">
                <h1 className="font-semibold text-xl mb-2">"{item.name}"<span className="font-normal text-lg">, {item.year}</span></h1>
                {item?.description?.split(' ').length > 1 ? (<p className="font-normal p-1 rounded border">{minDescription(item.description)}</p>) : (<p></p>)}
            </div>

            <span className="bg-emerald-100 rounded font-semibold p-1 self-start">{item.rating.imdb}</span>
        </li>
    ) : (<></>)

}

export default ListItem;