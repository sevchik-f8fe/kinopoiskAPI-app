import portfolio_f from "./portfolio_f.png";

const DraftsPage = () => {
    return (
        <div className="grid grid-rows-2 dark:bg-zinc-800 grid-flow-col gap-4 p-4">
            <Draft
                title="Сайт-портфолио"
                description="Красивый сайт для таких как вы :)"
                stack="HTML/CSS, SCSS, React, AOS, Anime.js"
                imgURL={portfolio_f}
            />

            <Draft
                title="Сайт-портфолио"
                description="Красивый сайт для таких как вы :)"
                stack="HTML/CSS, SCSS, GSAP"
                imgURL="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"
            />
            <Draft
                title="Сайт-портфолио"
                description="Красивый сайт для таких как вы :)"
                stack="HTML/CSS, SCSS, GSAP"
                imgURL="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"
            />
            <Draft
                title="Сайт-портфолио"
                description="Красивый сайт для таких как вы :)"
                stack="HTML/CSS, SCSS, GSAP"
                imgURL="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"
            />
            <Draft
                title="Сайт-портфолио"
                description="Красивый сайт для таких как вы :)"
                stack="HTML/CSS, SCSS, GSAP"
                imgURL="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"
            />
            <Draft
                title="Сайт-портфолио"
                description="Красивый сайт для таких как вы :)"
                stack="HTML/CSS, SCSS, GSAP"
                imgURL="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"
            />


        </div>
    );
}

const Draft = ({ title, description, url, imgURL, stack }) => {
    return (
        <div className="border-2 dark:bg-zinc-900 border-orange-300 dark:border-zinc-700 rounded-xl">
            <div className="relative cursor-pointer inline-block overflow-hidden">
                <a href={url}>
                    <img className="rounded-xl hover:scale-125 grayscale hover:grayscale-0 transition-all duration-700" src={imgURL} alt="draft" />
                </a>
            </div>
            <div className="p-2">
                <h1 className="rounded-md text-xl font-semibold dark:text-zinc-100 text-zinc-900 mb-4">{title}</h1>
                {stack.split(', ').map((skill) => <span className="text-orange-600 font-bold dark:border-orange-500 dark:bg-zinc-800 dark:text-orange-500 p-1 rounded-lg bg-orange-50 border-orange-600 border-2 mr-2">{skill}</span>)}
            </div>
            <div className="dark:text-zinc-100 text-zinc-700 font-medium text-md p-2">
                {description}
            </div>
        </div>
    );
}

export default DraftsPage;