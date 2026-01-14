export default function  Props(props){
    const {data}=props;
    const {name,color,about}=data;
    return(
        <>
        <h1>{props.data.name}</h1>
        <h1>{props.data.about}</h1>
        {/*<h1>{props.name} good add flower</h1>
        <h1>{props.color}my favouriteb color</h1>*/}

        {/*
            props.data.about.map((data1)=>
                <div>{data1}</div>
        )
        */}
        {
            about.map((data1)=>
                <div>{data1}</div>
        )
        }
        
        </>

    )
}