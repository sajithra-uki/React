//import logo from './logo.svg';
import { BrowserRouter,Router,Routes,Link, Route } from 'react-router-dom';
import ColorPicker from './compontes/colorpick/Colorpick';
import ColorPickerWithPresets from './compontes/colorpick/Colorpickerwithpresets';
import menu_icon from"../../Activity/menu_icon";
// import './App.css';
// import setCount from './compontes/day1ass/Setcount';
//import Form from './compontes/Form';
//import Discover from './compontes/Activity/Discover';
//  import React, { useState } from 'react';
// import { FontSizeProvider } from './context/FontSizeContext';
// import FontSizeControls from './components/FontSizeControls';
// import StudentTable from './components/StudentTable';
// import StudentProfile from './components/StudentProfile';
// import students from './data/studentsData';

function App() {
//   const [selectedCounter, setSelectedCounter] = useState(null);

    // const handleSelectStudent = (student) => 
    //     setSelectedStudent(student);
    
  return (
   //<Form></Form>
   //<Discover></Discover>
  // <>
  //  <BrowserRouter>
  //  <nav>
  //   <Link to='/'>Home</Link>
  //   <Link to='/project'>Project</Link>
  //   <Link to='/experience'>Experience</Link>
  //   <Link to='/contact'>Contact</Link>
  //  </nav>
  //  </BrowserRouter>

  //  <Routes>
  //   <Route path='/' element={<Home></Home>}></Route>
  //   <Route path='/project' element={<Project></Project>}></Route>
  //   <Route path='/experience' element={<Experience></Experience>}></Route>
  //   <Route path='/contact' element={<Contact></Contact>}></Route>
    
  //  </Routes>
  // </>
  <>
   {/* <ColorPicker></ColorPicker>  */}
  <ColorPickerWithPresets></ColorPickerWithPresets>
  {/* <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={clearCount}>
        Clear Count
      </button> */}
  
  

   

{/*     
        <FontSizeProvider>
            <div className="App" style={{ fontFamily: 'Arial, sans-serif' }}>
                <h1 style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
                    ABC Institute Student Information Portal
                </h1>
                
                
                <FontSizeControls />
                
                
                <div style={{ display: 'flex', width: '90%', margin: '0 auto', border: '1px solid #ccc' }}>
                    
                  
                    <div style={{ flex: 2, minWidth: '400px' }}>
                        <StudentTable 
                            students={students} 
                            onSelectStudent={handleSelectStudent} 
                        />
                    </div>
                    
                    
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <StudentProfile 
                            student={selectedStudent} 
                        />
                    </div>
                </div>
            </div>
        </FontSizeProvider> */}
    
    


  </>
  );
}

export default App;
