export default function Movies(){

    const lista = [{id:1, name:"Nowy", age:10},{id:2, name:"Stary", age:20}]
    
    return(
        <>
            <h1>Lista próbna</h1>
            <ul>
                {
                    lista.map(item=><li key={item.id}>{item.name}, {item.age}</li>)
                }
            </ul>
        </>
    )
}