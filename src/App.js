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
      .then(response => this.setState({ users: response }))
     .then(response => console.log(this.state.users))
  }

  render() {
    return (

      <div>
        <User />
        <Button variant="contained" color="secondary" size="small" onClick={this.handleUser}>Search</Button>
      </div>
    );
  }
}
export default App;
