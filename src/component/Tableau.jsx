
function Tableau() {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-t-2 ">
                        <table className="min-w-full text-left text-sm">
                            <caption className="caption-top py-2 text-lg">
                                Utilisateur
                            </caption>
                            <thead
                                className="border border-b-[2px] border-b-[#3a3939] bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                <tr>
                                    <th scope="col" className="px-6 py-2">Pénom</th>
                                    <th scope="col" className="px-6 py-2">Nom</th>
                                    <th scope="col" className="px-6 py-2">Email</th>
                                    <th scope="col" className="px-6 py-2">Telephone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    className="border bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                    <td className="whitespace-nowrap px-6 py-2 font-medium">1</td>
                                    <td className="whitespace-nowrap px-6 py-2">Mark</td>
                                    <td className="whitespace-nowrap px-6 py-2">Otto</td>
                                    <td className="whitespace-nowrap px-6 py-2">@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tableau
