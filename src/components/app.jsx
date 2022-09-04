
import React, { useState } from "react";
import './myapp.css'

const App = () => {

  const [input, setData] = useState({name:"",department:"",rating:"",})
  const[arrofobj,setArrofobj] =useState([])
  const[hidden,setHidden] =useState(0)

  const [counter,setCounter] = useState(0);
  const inputChange = (e) => {
        setData({...input,[e.target.name]:e.target.value});
  }

  const onsubmits = (e) =>{
    e.preventDefault();
    setCounter(counter+1)
    const arr={...input,id:counter}
    setArrofobj([...arrofobj,arr])
    setData({name:"",department:"",rating:"",})
    console.log(arrofobj);
    setHidden(!hidden)
  }

  const goBack =()=>{
    setHidden(!hidden)
  }
  

  return (
    <>
      <div id='formCompo' style={{'display':hidden===true ? 'none':'unset'}} >
          <h1>EMPLOYEE FEEDBACK FORM</h1><hr/>
          <form className="card-1" action='' onSubmit={onsubmits}>
            <label className="text">Name :</label>
            <input className="input" type="text" id="name" name="name" value={input.name}  onChange={inputChange} /><br/><br/>
            <label className="text">Department :</label>
            <input className="input" type="text" id="department" name="department" value={input.department} onChange={inputChange} /><br/><br />
            <label className="text" >Rating :</label>
            <input className="input" type="number" id="rating" name="rating" value={input.rating} onChange={inputChange} /><br/> <br />
            <button className="submit" type="submit">Submit</button>
          </form>
          
      </div>
      <div id='formData' style={{'display':hidden===true ? 'unset':'none'}} >
        <h1>EMPLOYEE FEEDBACK DATA</h1><hr />
          <div className='box-2'>
            {arrofobj.map((item)=>{
                return <div className='inbox'>Name : {item.name } | Department : {item.department} | Rating : {item.rating}</div>
            })}
          </div>
          <button className="backbtn" onClick={goBack}>Go Back</button>
      </div>
     
    </>
  );
}
export default App;



