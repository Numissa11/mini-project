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
      .then(response => this.setState({ users: response.data }, () => console.log('Fresh data fetched..', response)))
      .then(() => console.log(this.state.users))
  }

  render() {
    return (

      <div>

        <ul>
          {this.state.users.map(user =>
            <li key={user.id}> Name: {user.name} Username: {user.high} email: {user.email} Adresse: {user.adresse}</li>
          )}
        </ul>

        <User />
        <Button variant="contained" color="secondary" size="small" onClick={this.handleUser}>Search</Button>
      </div>
    );
  }
}
export default App;
