export default function Movies({listaFilmow}){

    // const lista = [{id:1, name:"Nowy", age:10},{id:2, name:"Stary", age:20}]

    return(
        <>
            <h1>Lista próbna</h1>
            <ul>
                {
                    listaFilmow.map(item=><li key={item.episode_id}>{item.title}, {item.opening_crawl}</li>)
                }
            </ul>
        </>
    )
}