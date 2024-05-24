const DraftsPage = () => {
    return (
        <div className="grid grid-rows-2 grid-flow-col gap-4 p-4">
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
        <div className="border-2 bg-zinc-700 border-orange-500 rounded-xl">
            <div className="relative cursor-pointer">
                <a href={url}>
                    <img className="rounded-xl " src={imgURL} alt="draft" />
                    <h1 className="absolute text-2xl font-semibold text-zinc-100 bottom-4 left-4 bg-zinc-900 p-1">{title}</h1>
                </a>
            </div>
            <div className="p-4">
                {stack.split(', ').map((skill) => <span className="text-orange-600 font-bold px-2 py-1 rounded-lg bg-orange-50 border-orange-600 border-2 mr-2">{skill}</span>)}
            </div>
            <div className="text-zinc-100 font-medium text-md p-4">
                {description}
            </div>
        </div>
    );
}

export default DraftsPage;