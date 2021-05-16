import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const UserList = (props) => {

    return (
        <div >
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mail</th>
                        <th colSpan="3" scope="col">Contacts</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user, i) => (

                        <Fragment>

                            <tr key={i} data-toggle="collapse"
                                data-target={".multi-collapse" + i}
                                aria-controls={"multiCollapseExample" + i}  >
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.mail}</td>
                                <td>{user.contact}</td>
                                <td><Link type="button"
                                    to={`edit/${user.id}`}
                                    className="btn btn-md btn-outline-primary"
                                >Edit</Link></td>
                                <td><button className="btn btn-md btn-outline-danger" data-target={i} onClick={(event) => props.deleteUserProp(user)}>Delete</button></td>
                            </tr>

                            <tr className={"collapse multi-collapse" + i} id={"multiCollapseExample" + i} >
                                <td colSpan="6" className="collapsible clearfix" >
                                    <div className="coldiv" > <p> <h4> Address:</h4>{user.body}</p></div>
                                </td>
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default UserList;