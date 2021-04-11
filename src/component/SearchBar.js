import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

  
    
    handleFormSubmit = (event) => { 

        event.preventDefault();
     }

    render () {

        return (
        <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5"> 
        <div className="col-4 ">
            <input onChange={this.props.searchUserProp}
             type="text" className="form-control"
             placeholder="Search a user name"
           
             
             />
        </div>

        <div className="col-2">
            <button   
                    to="/add"
                    type="button" 
                    className="btn btn-md btn-danger"
                    style={{float: 'right'}}>Add User</button>
        </div>

        </div>
    </form>
        )
    }
}


export default SearchBar;