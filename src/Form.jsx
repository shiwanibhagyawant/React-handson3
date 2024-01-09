import React,{useState}from 'react'
import './Form.css'

function Form() {
    const [showComp,setShowComp]=useState(false);
    function ClickHandler(){
      setShowComp((preValue)=>{return !preValue})
    }
    const [state,setstate]=useState({
        Name:"",
        Department:"",
        Rating:"",
        employees:[]
    })

    const ChangeHandler=(e)=>{
        setstate({...state, [e.target.name] : e.target.value})
      }
      const onSubmit=(e)=>{
        e.preventDefault();
        console.log("onsubmit event fired..");

        const emplObj={
          Name:state.Name,
          Department:state.Department,
          Rating:state.Rating,
        }
        const arr =state.employees;
          arr.push(emplObj);
          setstate({...state,employees:arr});
          ClickHandler();
          document.getElementById('forms').reset();
      }
      if(showComp){
        return(
          <div className='data-container'>
             <h1>Employee Feedback Data</h1>
             <div className='data'>
             {state.employees.map((value,index,array)=>{
              return(
              <div key={index}>{value.Name}&nbsp;&nbsp;{value.Department}&nbsp;&nbsp;{value.Rating}&nbsp;&nbsp;</div>
              )
            }
            )}
             </div>
             <button onClick={ClickHandler} className="back">Go Back</button>
        </div>
        )
      }
      else{
        return(
        <div className='container'>
        <h1>Employee Feedback Form</h1>
        <div className='shape1'></div>
        <div className='shape shape2'></div>
        <div className='form-container'>
          <form id="forms" action="">
            <label htmlFor='name' className='label-wrapper'><span className='input-text'>Name</span></label>
            <input type="text" name="Name"  onChange={ChangeHandler} autoComplete="off" placeholder='Enter your name'></input>
            <br />
            <label htmlFor='department' className='label-wrapper'><span className='input-text'>Department</span></label>
            <input type="text" name="Department" onChange={ChangeHandler} autoComplete="off" placeholder='Enter your department'></input>
            <br />
            <label htmlFor='rating' className='label-wrapper'><span className='input-text'>Rating</span></label>
            <input type="text" name="Rating"  onChange={ChangeHandler} autoComplete="off" placeholder='Give Your Rating..'></input>
            <br />
            <button type="submit" onClick={onSubmit}>Submit</button>
        </form>
    </div>
  </div>  
  )
  }
}
export default Form