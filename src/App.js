    import React from 'react';
    import axios from 'axios';
    import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    import SearchBar from './component/SearchBar';
    import UserList from './component/UserList';
    import AddUser from './component/AddUser';





    class App extends React.Component {

        state = {
            users: [

            ],
            searchQuery: ""
        }

        async componentDidMount() {
            const response = await axios.get("http://localhost:3004/users");
           
            this.setState({ users: response.data });
            console.log(response);
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
                users:state.users.concat([user])
            }))
        }

        render() {

            let filteredUsers = this.state.users.filter(
                (user) => {
                    return user.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
                }
            ).sort( (a, b) => {
                return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
            });

            return (
               

                    <div className="container">
                     
                          

                     

                                <div className="row">
                                    <div className="col">
                                        <SearchBar searchUserProp={this.searchUser} />

                                        <UserList
                                            users={filteredUsers}
                                            deleteUserProp={this.deleteUser}
                                        />
                                    </div>
                                </div>

                          

                    

                      
                            
                            
                            <AddUser 
                            onAddUser = {(user) => {this.addUser(user)
                            }} />
                        

                    </div>

          
            )

        }

    }

    export default App;



