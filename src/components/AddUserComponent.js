import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import UserService from '../services/UserService';


const AddUserComponent = () => {

    const initialValues = { name: "", email: "", mobile: "", gender: "", age: "", nationality: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        if(Object.keys(formErrors).length === 0 && isSubmit)
        {
            console.log("button Pressed", formValues) ;
            UserService.createUser(formValues).then((response) =>{
                console.log(response.data)
                navigate('/users');
            }).catch(error => {
                console.log(error)
            })
        }  
      };

      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);

      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          errors.name = "Username is required!";
        }
        else if (!values.email) {
          errors.email = "Email is required!";
        }
          else if (values.age < 20 || values.age > 40) {
            errors.age = "Age Should be between 20 and 40";
          }
          else if (!values.nationality) {
            errors.nationality = "Nationality is required";
          }
        return errors;
      };


  return (
    <div className="container">  
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="text-center">Signed in successfully</div>)  : 
        (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)}

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">User Name</label>
                    <input type="text" className="form-control" 
                        id="name" 
                        placeholder="Username"
                        //name="username"
                        value={formValues.name}
                        onChange={handleChange}/>
            </div>
                <p>{formErrors.name}</p>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" 
                    id="email"
                    placeholder="Email Address"
                    value={formValues.email} 
                    //name="email"
                    onChange={handleChange}/>
            </div>
                <p>{formErrors.email}</p>
            <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input type="text" className="form-control" 
                    id="mobile" aria-describedby="mobileHelp"
                    placeholder="Mobile Number"
                    value={formValues.mobile} 
                    //name="email"
                    onChange={handleChange}/>
                <div id="mobileHelp" className="form-text">Enter phone number without space, '-'.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Gender</label>
                <input type="text" className="form-control" 
                    id="gender"
                    placeholder="Gender"
                    value={formValues.gender} 
                    //name="email"
                    onChange={handleChange}/>
            </div>
                <p>{formErrors.gender}</p>
            <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="text" className="form-control" 
                    id="age" aria-describedby="ageHelp"
                    placeholder="Age"
                    value={formValues.age} 
                    //name="email"
                    onChange={handleChange}/>
                <div id="ageHelp" className="form-text">Enter age between 20 to 40</div>
            </div>
                <p>{formErrors.age}</p>
            <div className="mb-3">
                <label className="form-label">Nationality</label>
                <input type="text" className="form-control" 
                    id="nationality"
                    placeholder="Nationality"
                    value={formValues.nationality} 
                    //name="email"
                    onChange={handleChange}/>
            </div>
            <p>{formErrors.nationality}</p>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/users" className="btn btn-danger" style = {{marginLeft:"10px"}}> Cancel </Link>
        </form>
    </div>
)
}

export default AddUserComponent