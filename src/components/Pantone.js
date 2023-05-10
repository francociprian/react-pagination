const Pantone = ({ pantone }) => {
    return (
        <article className="p-2 my-1 bg-stone-100 text-black rounded-sm min-w-[24rem]">
            <div className="flex items-center justify-evenly gap-4">
                <div style={{ backgroundColor:pantone.color }} className="w-20 h-20"></div>
                <div>
                    <h2 className="text-2xl font-normal first-letter:uppercase">{pantone.name}</h2>
                    <p className="text-md font-light first-letter:uppercase">Pantone Value: {pantone.pantone_value}</p>
                    <p className="text-xs font-extralight">ID:{pantone.id}</p>
                </div>
            </div>
        </article>
    )
}
export default Pantone