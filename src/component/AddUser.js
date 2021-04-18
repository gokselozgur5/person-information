import React from 'react';
import serialize from 'form-serialize';
import { Link } from 'react-router-dom';

class AddUser extends React.Component {

 

   

 
    handleFormSubmit = (e) => {
        e.preventDefault();
        const newUser = serialize(e.target, {hash: true}); 
        console.log(newUser);
        this.props.onAddUser(newUser);
      
    }


    validateEmailAdress() {
        let emailAdressError= "";
        
    }

    render () {

       console.log(this.state);
         console.log(this.props);
        return (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" style={{textAlign: "center"}} id="disabledInput" type="text" placeholder="Fill The Form To Add A User.." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name" required/>
                    </div>
                   
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputMail">Mail</label>
                        <input 
                                type="email"
                                className="form-control" 
                                name="mail" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="contactTextarea">Phone  <br></br>Format: 123-123-1234</label>
                        <input  type="tel"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                required
                                className="form-control" 
                                name="contact" rows="5" required></input>
                                
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputBody">Address</label>
                        <textarea 
                                className="form-control" 
                                name="body" rows="5" required></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add User" />
                <br></br>
                <Link type="button" to="/" className="btn btn-secondary w-100">Back</Link>
            </form>
        </div>
        )
    }
}


export default AddUser;