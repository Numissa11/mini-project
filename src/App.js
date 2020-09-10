import React from 'react';
import './App.css';
import User from './components/user';
import axios from 'axios';
import { Button } from '@material-ui/core';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  handleUser = () => {

    let url = `https://jsonplaceholder.typicode.com/users`
    axios.get(url)
    .then(response => this.setState({ users: response.data }, () => console.log('Fresh data fetched in State..', this.state)))
  }
/*

  deleteCharacter = (id) => {
    const users = this.state.users.filter(user => user.id !== id)
    this.setState({ users })
  }*/

  // TODO: When adding a new user think about how can i copy the state property (users) as I cannot mutate the state directly e.g. this.state.users.push(users)

  // Spread operator || create a copy
  

  render() {
    return (


      
      <div>

        {this.state.users.map((user) => (
            <User
              {...user}
              key={user.id}
            />
          ))}

        <ul>
          {/* TODO: When mapping each user, how can I create a reusable component and pass data as props to this component (User Component) */}
          {/* TODO: How can I implement the delete button on every single component */}
          {/*this.state.users.map(user =>
            <li key={user.id}> Name: {user.name} --- Username: {user.username} --- email: {user.email} --- City: 
            {user['address']['city']} --- Latitude: {user['address']['geo']['lat']} 
            --- Longitude: {user['address']['geo']['lng']}</li>
          )*/}
        </ul>
        <Button variant="contained" color="secondary" size="small" onClick={this.handleUser}>Search</Button>

        
        
      </div>
    );
  }
}
export default App;
