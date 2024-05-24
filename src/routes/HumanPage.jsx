import { useEffect, useState } from "react";

const HumanPage = () => {
    const url = "https://6649dccc4032b1331bef09e9.mockapi.io/api/v1-20-req/actor";
    const [actor, setActor] = useState({});

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setActor(json[0].person[0]);
            })
            .catch(err => console.log(err));
    }, []);

    const arrayToString = (arr) => {
        if (arr.length)
            return arr.map((elem) => elem.value).join(', ');
        else {
            return '-';
        }
    }

    return (
        <div className="p-4 mt-16 flex justify-start gap-6 w-4/5 mx-auto relative">
            <div className="w-1/3 flex flex-col items-center gap-16">
                <img src={actor?.photo} alt="actor" />
            </div>

            <div className="w-2/3">
                <h1 className="text-5xl font-bold mb-4 text-slate-800">{actor.name || actor.enName}</h1>

                <table className="table-fixed mt-4 text-left">
                    <thead>
                        <tr>
                            <th className="text-2xl pb-4 w-2/5"></th>
                            <th className="w-3/5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pb-2">Возраст</td>
                            {actor.age !== null ? (<td>{actor.age}</td>) : (<td>-</td>)}
                        </tr>
                        <tr>
                            <td className="pb-2">Пол</td>
                            {actor.sex !== null ? (<td>{actor.sex}</td>) : (<td>-</td>)}
                        </tr>
                        <tr>
                            <td className="pb-2">Родился</td>
                            {actor.birthday !== null ? (<td>{new Date(actor.birthday).toLocaleDateString()}</td>) : (<td>-</td>)}
                        </tr>
                        <tr>
                            <td className="pb-2">Место рождения</td>
                            <td>{arrayToString(actor.birthPlace)}</td>
                        </tr>
                        <tr>
                            <td className="pb-2">Умер</td>
                            {actor.death ? (<td>{new Date(actor.death).toLocaleDateString()}</td>) : (<td>-</td>)}
                        </tr>
                        <tr>
                            <td className="pb-2">Место смерти</td>
                            <td>{arrayToString(actor.deathPlace)}</td>
                        </tr>
                        <tr>
                            <td className="pb-2">Рост</td>
                            {actor.growth !== null ? (<td>{actor.growth}</td>) : (<td>-</td>)}
                        </tr>
                        <tr>
                            <td className="pb-2">Проффесия</td>
                            <td>{arrayToString(actor.profession)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HumanPage;