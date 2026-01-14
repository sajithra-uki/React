export default function  Data(props){
    const {data}=props;
    const {EMP,name,Department,Position,Salary,Joining}=data;
    return(
        <>
        <h1>{EMP.name.Department.Position.Salary.Joining}</h1>
        {/*<h1>{MP,name,Department,Position,Salary,Joining}</h1>
        {/*<h1>{props.name} good add flower</h1>
        <h1>{props.color}my favouriteb color</h1>*/}

        {/*
            props.data.about.map((data1)=>
                <div>{data1}</div>
        )
        */}
        {
            data.map((data)=>
                <table>{data}</table>
        )
        }
        
        </>

    )
}