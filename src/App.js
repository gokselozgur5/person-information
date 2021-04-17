import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from './component/SearchBar';
import UserList from './component/UserList';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import './style/style.css';

class App extends React.Component {

    state = {
        users: [],
        searchQuery: ""
    }

    async componentDidMount() {
        this.getUsers();
    }

    async getUsers() {
        const response = await axios.get("http://localhost:3004/users");
        this.setState({ users: response.data });
    }

    deleteUser = async (user) => {
        axios.delete(`http://localhost:3004/users/${user.id}`)
        const newUserList = this.state.users.filter(
            m => m.id !== user.id
        )
        this.setState(state => ({
            users: newUserList
        }))
    }

    searchUser = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    addUser = async (user) => {
        await axios.post(`http://localhost:3004/users/`, user)
        this.setState(state => ({
            users: state.users.concat([user])
        }))
        this.getUsers();
    }

    editUser = async (id, updatedUser) => {
        await axios.put(`http://localhost:3004/users/${id}`, updatedUser)
        this.setState(state => ({
            users: state.users.concat([updatedUser])
        }))
        this.getUsers();
    }

    render() {

        let filteredUsers = this.state.users.filter(
            (user) => {
                return user.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        );
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route path="/" exact>
                            <div className="row">
                                <div className="col">
                                    <SearchBar searchUserProp={this.searchUser} />
                                    <UserList
                                        users={filteredUsers}
                                        deleteUserProp={this.deleteUser}
                                    />
                                </div>
                            </div>
                        </Route>
                        <Route path="/add" render={({ history }) => (
                            <AddUser onAddUser={(user) => {
                                this.addUser(user)
                                history.push("/")
                            }} />
                        )} />
                        <Route path="/edit/:id" exact render={(props) => (
                            <EditUser
                                {...props}
                                onEditUser={(id, user) => {
                                    this.editUser(id, user)
                                }
                                }
                            />
                        )} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;