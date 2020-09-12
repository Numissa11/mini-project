import React from 'react';
import './App.css';
import User from './components/user';
import UserForm from './components/UserForm';
import axios from 'axios';
import { Button } from '@material-ui/core';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  getUser = () => {

    let url = `https://jsonplaceholder.typicode.com/users`
    axios.get(url)
      .then(response => this.setState({ users: response.data }, () => console.log('Fresh data fetched in State..', this.state)))
  }


  deleteUser = (id) => {
    const users = this.state.users.filter(user => user.id !== id)
    this.setState({ users })
  }

  // addCharacter receive the new User, the new state that is is UserForm, in the other component
// then, with the variable users, we capture the actual array of users that are in the state in this component
// we push the new user received in the Array we just created 

  addUser = (newUser) => {
    let users = this.state.users;
    users.push(newUser)

    this.setState({ users: users })
  }

  // TODO: When adding a new user think about how can i copy the state property (users) as I cannot mutate the state directly e.g. this.state.users.push(users)

  // Spread operator || create a copy


  render() {
    return (



      <div className='App'>

        <ul>
          {/*When mapping each user,  I create a reusable component and pass data as props to this component (User Component) */}

          {this.state.users.map((user) => (
            <User
              {...user}
              deleteUser={this.deleteUser}
              key={user.id}
            />
          ))}
        </ul>

        <Button variant="contained" color="secondary" size="small" onClick={this.getUser}>Search</Button>


        <UserForm
        addUser={this.addUser}
        />

        {/* Note: this code was mapping directely the state will all the users (object) and was displaying it all together

            this.state.users.map(user =>
            <li key={user.id}> Name: {user.name} --- Username: {user.username} --- email: {user.email} --- City: 
            {user['address']['city']} --- Latitude: {user['address']['geo']['lat']} 
            --- Longitude: {user['address']['geo']['lng']}</li>
          )*/}




      </div>
    );
  }
}
export default App;
