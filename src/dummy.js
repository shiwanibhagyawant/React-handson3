// import React,{useState} from 'react';
// import "./App.css"
// // import Form from './Form';
// // import RouteFile from './RouteFile';
// // import Table from "./Table"

// function App() {
//   // const [inputarr,setInputarr]=useState([])
//   var [state,setstate]=useState({
//     Name:"",
//     Department:"",
//     Rating:"",
//     employees:[]
//   })
//   var ChangeHandler=(e)=>{
//     setstate({...state, [e.target.name] : e.target.value})
//   }
//   var onSubmit=(e)=>{
//     // console.log(e.target);
//     e.preventDefault();
//     console.log("onsubmit event fired..");
//     const emplObj={
//       Name:state.Name,
//       Department:state.Department,
//       Rating:state.Rating,
//     }
//     const arr =state.employees;
//     console.log(arr);
//     arr.push(emplObj);
//     console.log(arr);
//     setstate({employees:arr})
//   }

//     return(
//       <div className='container'>
//       <h1>Employee Feedback Form</h1>
//       <div className='shape1'></div>
//       <div className='shape shape2'></div>
//       <div className='form-container'>
//       <form action="">
//         <label htmlFor='name' className='label-wrapper'><span className='input-text'>Name</span></label>
//         <input type="text" name="name" autoComplete="off" value={state.Name} onChange={ChangeHandler} placeholder='Enter your name'></input>
//         <br />
//         <label htmlFor='department' className='label-wrapper'><span className='input-text'>Department</span></label>
//         <input type="text" name="department" autoComplete="off" value={state.Department} onChange={ChangeHandler} placeholder='Enter your department'></input>
//         <br />
//         <label htmlFor='rating' className='label-wrapper'><span className='input-text'>Rating</span></label>
//         <input type="text" name="rating" autoComplete="off" value={state.Rating} onChange={ChangeHandler} placeholder='Give Your Rating..'></input>
//         <br />
//         {/* <Link to='/table'><button type="submit" onClick={onSubmit}>Submit</button></Link> */}
//         <button type="submit" onClick={onSubmit}>Submit</button>
//       </form>
//   </div>
//   <div className='data'>
//           {state.employees.map((value,index,array)=>{
//             return(
//               <span key={index}>{value.Name}&nbsp;&nbsp;{value.Department}&nbsp;&nbsp;{value.Rating}&nbsp;&nbsp;</span>
//             )
//           }
//           )}
//         </div>
// </div>  
//   );
// }

// export default App;