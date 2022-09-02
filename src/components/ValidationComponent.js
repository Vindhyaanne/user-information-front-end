import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';

const ValidationComponent = () => {

    const initialValues = { gender: "" };
    const [formValues, setFormValues] = useState(initialValues);

    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    const handleChange = (e) => {
        console.log(e.target.id)
        console.log(e.target.value)
        const { id, value } = e.target;        
        setFormValues({ ...formValues, [id]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
         console.log("button Pressed", formValues) ;
      }

  return (
    <div className="container">  
    <br></br>
    <form onSubmit={handleSubmit}>
        <div className = "mb-3 row">
            <label className = "col-sm-1 col-form-label"> Gender </label>
            <div className="col-sm-6">
                <select  id = "gender" 
                value={formValues.gender} 
                onChange = {(e) => handleChange(e)} 
                style = {{marginLeft:"10px"}}>
                    <option> Male </option>
                    <option> Female </option>
                </select>
            </div>
        </div>
        <div className="topping">
    <input type="checkbox" 
            id="topping" 
            name="topping" 
            value="Paneer" 
            checked={formValues.isChecked}
            onChange={handleOnChange}
            />Paneer
  </div>
        {/*<div className="form-check">
            <input className="form-check-input" 
                type="checkbox" 
                //value={formValues.veteran} 
                id="veteran"  checked={formValues.veteran} 
                onChange = {(e) => handleCheckChange(e)} />
            <label className="form-check-label"> Is Veteran? </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" 
                type="checkbox" 
                id="asian" checked={formValues.asian} 
                onChange = {(e) => handleCheckChange("asian")} />
            <label className="form-check-label"> Is Asian? </label>
  </div>*/}
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="result">
        Above checkbox is {isChecked ? "checked" : "un-checked"}.
      </div>
    </div>
  )
}

export default ValidationComponent