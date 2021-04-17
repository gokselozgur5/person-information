import React from 'react';
import serialize from 'form-serialize';

class AddUser extends React.Component {

  
    handleFormSubmit = (e) => {
        e.preventDefault();
        const newUser = serialize(e.target, {hash: true}); 
        console.log(newUser);
        this.props.onAddUser(newUser);
    }

    render () {

        return (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A User.." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"/>
                    </div>
                   
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputMail">Mail</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="mail"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="contactTextarea">Address</label>
                        <textarea 
                                className="form-control" 
                                name="contact" rows="5"></textarea>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputBody">Body</label>
                        <textarea 
                                className="form-control" 
                                name="body" rows="5"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add User" />
            </form>
        </div>
        )
    }
}


export default AddUser;