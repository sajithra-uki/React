export default function()
{
    const table=[
        
        {id:'1',name:'Maya',Age:'21',Course:'React',Grade:'A',},
        {id:'2',name:'Arun',Age:'22',Course:'JavaScript',Grade:'B',},
        {id:'3',name:'Meena',Age:'20',Course:'HTML & CSS',Grade:'A',},
        {id:'4',name:'Ravi',Age:'23',Course:'Node.js',Grade:'B',},
        {id:'5',name:'Priya',Age:'21',Course:'Python',Grade:'A',},
        {id:'6',name:'Karthik',Age:'22',Course:'Java',Grade:'B',},
        {id:'7',name:'Ananya',Age:'20',Course:'CSS & Bootstrap',Grade:'A',},
        {id:'8',name:'Bala',Age:'23',Course:'Canva',Grade:'B',},
    ]
    return(
        <>

       <table border={11} style={{textAlign:"center", padding:'30px',margin:'140px', height:'800px', width:'800px', color:'red', backgroundColor:'yellow'}}>
        <tr>
            <td>ID</td>
            <td>name</td>
            <td>Age</td>
            <td>Course</td>
            <td>Grade</td>
        </tr>
        
        <tr>
            <td>{table[0].id}</td>
            <td>{table[0].name}</td>
            <td>{table[0].Age}</td>
            <td>{table[0].Course}</td>
            <td style={{backgroundColor:'green'}}>{table[0].Grade}</td>
            
        </tr>
        <tr>
            <td>{table[1].id}</td>
            <td>{table[1].name}</td>
            <td>{table[1].Age}</td>
            <td>{table[1].Course}</td>
            <td style={{backgroundColor:'blue'}}>{table[1].Grade}</td>
            
        </tr>
        <tr>
            <td>{table[2].id}</td>
            <td>{table[2].name}</td>
            <td>{table[2].Age}</td>
            <td>{table[2].Course}</td>
            <td style={{backgroundColor:'green'}}>{table[2].Grade}</td>
            
        </tr>
        <tr>
            <td>{table[3].id}</td>
            <td>{table[3].name}</td>
            <td>{table[3].Age}</td>
            <td>{table[3].Course}</td>
            <td style={{backgroundColor:'blue'}}>{table[3].Grade}</td>
            
        </tr>
        <tr>
            <td>{table[4].id}</td>
            <td>{table[4].name}</td>
            <td>{table[4].Age}</td>
            <td>{table[4].Course}</td>
            <td style={{backgroundColor:'green'}}>{table[4].Grade}</td>
            
        </tr>
        <tr>
            <td>{table[5].id}</td>
            <td>{table[5].name}</td>
            <td>{table[5].Age}</td>
            <td>{table[5].Course}</td>
            <td style={{backgroundColor:'blue'}}>{table[5].Grade}</td>
            
        </tr>
        <tr>
            <td>{table[6].id}</td>
            <td>{table[6].name}</td>
            <td>{table[6].Age}</td>
            <td>{table[6].Course}</td>
            <td style={{backgroundColor:'green'}}>{table[6].Grade}</td>
            
        </tr>
        <tr>
            <td>{table[7].id}</td>
            <td>{table[7].name}</td>
            <td>{table[7].Age}</td>
            <td>{table[7].Course}</td>
            <td style={{backgroundColor:'blue'}}>{table[7].Grade}</td>
            
        </tr>
       </table>

        </>
    );
}