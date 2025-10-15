export default function Day4()
{
    const flower={
        name:'rose',
        count:'20',
    }
    const flower2=[
        {name:'rose',count:'8',},
        {name:'lily',count:'20',},
        {name:'jesmin',count:'10',size:'10'},
    ]
    return(
        <>
        <h1>this is a beautifyull:{flower.name}</h1>
        <h2>total of:{flower.count}</h2>

        <h1>this is a {flower2[2].size}</h1>

        <td>{flower2[2].size}</td>
        </>

    );
}