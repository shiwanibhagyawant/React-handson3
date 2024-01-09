import React from 'react'
import "./Forminput.css"
// import TableData from './TableData'

function Forminput({forminput,ChangeHandler,onSubmit}) {
  return (
    <div>
        <h1>Employee Feedback Form</h1>
      <div className='shape1'></div>
      <div className='shape shape2'></div>
      <div className='form-container'>
        <form action="">
          <label htmlFor='name' className='label-wrapper'><span className='input-text'>Name</span></label>
          <input type="text" name="name" value={forminput.Name} onChange={ChangeHandler} placeholder='Enter your name'></input>
          <br />
          <label htmlFor='department' className='label-wrapper'><span className='input-text'>Department</span></label>
          <input type="text" name="department" value={forminput.Department} onChange={ChangeHandler} placeholder='Enter your department'></input>
          <br />
          <label htmlFor='rating' className='label-wrapper'><span className='input-text'>Rating</span></label>
          <input type="text" name="rating" value={forminput.rating} onChange={ChangeHandler} placeholder='Give Your Rating..'></input>
          <br />
          {/* <Link to='/table'><button type="submit" onClick={onSubmit}>Submit</button></Link> */}
          <button type="submit" onClick={onSubmit}>Submit</button>
        </form>
       </div>
    </div>
  )
}

export default Forminput;