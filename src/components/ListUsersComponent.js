import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

const ListUsersComponent = () => {

const [users, setUsers] = useState([]);

useEffect(() => {
 /*  UserService.getAllEmployees().then((response) => {
        setUsers(response.data);
    }).catch((error) => console.log(error));*/
    fetchUsers();
}, [])

/*const fetchUsers =  () => {
    /*const URI = 'https://user-information-app.herokuapp.com/users/getAll';
    const res = await fetch(URI);
    const data = await res.json();
    console.log("some data" + JSON.stringify(data))
    return data; 
}*/

const fetchUsers = () => {
    fetch("https://user-information-app.herokuapp.com/users/getAll")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers(json);
      });
  };

  return (
<div className="container">
            <h2 className='text-center'> List of Users </h2>
            <Link to="/add-user" className="btn btn-primary mb-2"> Add User </Link>
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Nationality</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => 
                            <tr key={user.userId}>
                                <td> {user.userId} </td>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td> {user.mobile} </td>
                                <td> {user.gender} </td>
                                <td> {user.age} </td>
                                <td> {user.nationality} </td>
                            </tr>
                            )    
                    }
                </tbody>
            </table>
        </div>
  )
}

export default ListUsersComponent