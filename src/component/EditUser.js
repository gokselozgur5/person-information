import axios from 'axios';
import React from 'react';

class EditUser extends React.Component {

    state = {
        name: "",
        mail:"",
        contact:""
    }

    async componentDidMount () {
        const id = this.props.match.params.id;
        const response = await axios.get(`http://localhost:3004/users/${id}`);
        const user = response.data;
        console.log(user);
        console.log("test", user);
        this.setState({
            name: user.name,
            mail: user.mail,
            contact:user.contact
        })

    }

    onInputChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
    }

  
    handleFormSubmit = (e) => {
        e.preventDefault();
        const { name,mail,contact} = this.state;
        const id = this.props.match.params.id;
        console.log(this.props);
        const updatedUser = {name, mail, contact};
        this.props.onEditUser(id, updatedUser);
       
    }

    render () {

        return (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form To Update The User.." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.onInputChange}/>
                    </div>
                   
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Mail</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="mail"
                                value={this.state.mail}
                                onChange={this.onInputChange}
                                />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="contactTextarea">Address</label>
                        <textarea 
                                className="form-control" 
                                name="contact" rows="5"
                                value={this.state.contact}
                                onChange={this.onInputChange}></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Edit User" />
            </form>
        </div>
        )
    }
}


export default EditUser;