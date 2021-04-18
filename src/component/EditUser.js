import axios from 'axios';
import React from 'react';


class EditUser extends React.Component {



    state = {
        name: "",
        mail: "",
        contact: "",
        body: ""
    }

    async componentDidMount() {
        console.log(this.props);
        const id = this.props.match.params.id;
        const response = await axios.get(`http://localhost:3004/users/${id}`);
        const user = response.data;
        console.log(user);
        console.log("test", user);
        this.setState({
            name: user.name,
            mail: user.mail,
            contact: user.contact,
            body: user.body
        })

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, mail, contact, body } = this.state;
        const id = this.props.match.params.id;
        console.log(this.props);
        const updatedUser = { name, mail, contact, body };
        this.props.onEditUser(id, updatedUser);
        this.props.history.push("/");

    }

    render() {

        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" style={{textAlign: "center"}} id="disabledInput" type="text" placeholder="Edit The Form To Update The User.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onInputChange}
                                required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">E-Mail</label>
                            <input
                                type="email"
                                className="form-control"
                                name="mail"
                                value={this.state.mail}
                                onChange={this.onInputChange}
                                required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="contactTextarea">Phone  <br></br>Format: 123-123-1234</label>
                            <input
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                className="form-control"
                                name="contact" rows="5"
                                value={this.state.contact}
                                onChange={this.onInputChange}
                                required></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="contactTextarea">Body</label>
                            <textarea
                                className="form-control"
                                name="body" rows="5"
                                value={this.state.body}
                                onChange={this.onInputChange}
                                required></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block" value="Edit User" />
                    <br></br>
                   
                <button type="button" onClick={() =>   this.props.history.push("/")} className="btn btn-secondary w-100">Back</button>
               
                </form>
            </div>
        )
    }
}

export default EditUser;