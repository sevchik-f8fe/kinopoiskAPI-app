import { useState, useEffect } from "react";

import down from "./angle-down.svg";
import up from "./angle-up.svg";

const ShowReviews = ({ movieId }) => {
    const [isShow, setIsShow] = useState(false);
    const [reviews, setReviews] = useState([]);

    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'X-API-KEY': 'Y42XJJR-M6Z4YDD-JQ61SZ7-N10PVN6' }
    };

    useEffect(() => {
        fetch(`https://api.kinopoisk.dev/v1.4/review?page=1&limit=10&selectFields=movieId&selectFields=id&selectFields=author&selectFields=date&selectFields=review&selectFields=title&notNullFields=movieId&notNullFields=review&notNullFields=title&sortField=date&sortType=-1&movieId=${movieId}`, options)
            .then(response => response.json())
            .then(response => setReviews(response.docs))
            .catch(err => console.log(err));
    }, []);

    let classNameReviews = isShow ? "h-auto" : "h-0"

    return (
        <div className="my-16 border-t-2 pt-2">
            {reviews?.length > 1 && (
                <>
                    <div className="flex justify-center items-center gap-4">
                        <p className="font-medium text-lg text-zinc-600">{isShow ? "Скрыть отзывы" : "Показать отзывы"}</p>
                        <img
                            onClick={() => setIsShow(!isShow)}
                            className="w-8 h-8 cursor-pointer hover:bg-orange-50 hover:scale-105 transition-all p-1 rounded-md active:bg-orange-100 active:scale-95"
                            src={isShow ? up : down}
                            alt="control-button" />
                    </div>

                    <div className={`overflow-hidden mt-4 ${classNameReviews}`}>
                        <ul className="w-full">
                            {reviews.map((review) => <Review review={review} />)}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

const Review = ({ review }) => {
    return (
        <li data-index={review.id} className="flex-col border border-b-2 border-zinc-300 border-b-zinc-600 rounded items-start justify-between w-full cursor-pointer my-4 p-2 gap-2 bg-white">

            <div className="border-b pb-2 mb-2 flex justify-between items-center">
                <h2 className="font-medium text-lg text-zinc-50 text-center align-middle px-1 rounded-md bg-zinc-700">{review.author || "unknown"}</h2>
                <span className="text-zinc-500 text-sm font-normal">{new Date(review.date).toLocaleDateString()}</span>
            </div>

            <div className="flex-grow">
                <h2 className="font-medium text-zinc-600">{review.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: review.review }} className="text-zinc-600"></p>
            </div>
        </li>
    );
}

export default ShowReviews;