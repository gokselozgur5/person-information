import React from 'react';
import { Link } from 'react-router-dom';
import Collapse from './Collapse';

const UserList = (props) => {
   

    function handleClick(){
        console.log("delete islemi");
    }

    return(
        <div>

    <table className="table table-hover">
        
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Mail</th>
      <th scope="col">Contacts</th>
    </tr>
  </thead>

 
  <tbody>

  {props.users.map((user, i) => (
      <tr key={i}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.mail}</td> 
      <td>{user.contact}</td> 
      <td><Link type="button"
       to={`edit/${user.id}`}
       className="btn btn-md btn-outline-primary" 
       >Edit</Link></td>
      <td><button className="btn btn-md btn-outline-danger" onClick={(event) => props.deleteUserProp(user)}>Delete</button></td>
       
    </tr>
      )  )}
    
   
  </tbody>
</table>
</div>
    )

    

}

export default UserList;