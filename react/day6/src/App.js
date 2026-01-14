
//import Props from "./compontes/Props";
 //export default function App() {
  //const flower={
   // name:'sunflower',
   // color:'red',
    //about:[
     // 'hi',
      //'welcome',
      //'hello',
      //'good',
      //'bye',
    //]

    
  //}
  //return (
    //<Props name ='sunflower' color='yellow'></Props>
   // <Props data={flower}></Props>
  //);
//}

import Data from"./compontes/Data";
export default function App(){
  const table=[
        {EMP :'E001',name:'Harini T.',Department:'HR',Position:'HR Assistant',Salary :'65,000',Joining:'6/12/2023',},
        {EMP :'E002',name:'Ruwan S.',Department:'IT',Position:'Software Engineer',Salary :'120,000',Joining:'6/12/2023',},
        {EMP :'E003',name:'Divya P.',Department:'MARKETING',Position:'Digital Marketing',Salary :'95,000',Joining:'6/12/2023',},
        {EMP :'E004',name:'Manoj K.',Department:'FINANCE',Position:'Accountant',Salary :'110,000',Joining:'6/12/2023',},
        {EMP :'E005',name:'Anjali R.',Department:'DESIGN',Position:'UI/Ux Designer',Salary :'105,000',Joining:'6/12/2023',},
        {EMP :'E006',name:'Karthik A.',Department:'PHOTOGRAPHY',Position:'Camara opperater',Salary :'130,000',Joining:'6/12/2023',},
        {EMP :'E007',name:'Ananya B.',Department:'TRAINEE',Position:'Latchur',Salary :'110,000',Joining:'6/12/2023',},
        {EMP :'E008',name:'Bala W.',Department:'LABER',Position:'Cleaner',Salary :'39,000',Joining:'6/12/2023',},
  ]
  return(
    <Data data={table}></Data>
  )
}
