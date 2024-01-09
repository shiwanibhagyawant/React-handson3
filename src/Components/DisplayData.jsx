import React,{useState} from 'react'
import Forminput from './Forminput'
import TableData from './TableData'

function DisplayData() {
    const [tableData,setTableData]=useState([])
    const [forminput,setformInput]=useState({
        Name:"",
        Department:"",
        Rating:"",
    })
    const ChangeHandler=(e)=>{
        const newinput = setformInput({...forminput, [e.target.name] : e.target.value})
        console.log(newinput);
        setformInput(newinput);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        const checkEmptyInput = !Object.values(forminput).every(res=>res==="")
        if(checkEmptyInput)
        {
         const newData = (data)=>([...data, forminput])
         setTableData(newData);
         const emptyInput= {Name:'', Department:'', Rating:''}
         setformInput(emptyInput)
         console.log(emptyInput);
        }
    }
  return (
    <div className='data-container'>
         <Forminput ChangeHandler={ChangeHandler} formInput={forminput} onSubmit={onSubmit}/>
         <TableData tableData={tableData}/>
    </div>
  )
}

// import React from 'react';
// // import Form from './Form';
// // import RouteFile from './RouteFile';
// import DisplayData from './Components/DisplayData';
// import Forminput from './Components/Forminput';

// function App() {
//     return(
//     <div>
//       <Forminput/>
//       <DisplayData/>
//     </div>
//   );
// }

// export default App; 
export default DisplayData