import React from 'react';
import { TextField, Button } from '@material-ui/core';
import '../App.css'



class UserForm extends React.Component {
      constructor(props) {
            super(props);
            this.state = {

                  name: '',
                  username: '',
                  email: '',
                  city: '',
                  addForm: false
            }
      }

      showForm = (event) => {

            this.setState({ addForm: true });
      }

      //question: does handleSubmit first call addCharacter and in second set the State?
      // or does handlesubmit first set the State and after pass down the new user to AddCharacter?
      // I have troubles with order. I guess first the state here is updated and then passed down through prps to the function addUser


      handleChange = (event) => {
            let value = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: value })
      }

      // here the : 'this.props.addUser(this.state)' will be addUser(newUser) so this.state = newUser

      handleSubmit = (event) => {

            console.log('state du UserForm', this.state)
            this.props.addUser(this.state)
            this.setState({
                  name: '',
                  username: '',
                  email: '',
                  city: '',
            })

            alert('Congratulations ! ', this.state.name + ' was added');
            event.preventDefault();
      }

      render() {
            const { name, username, email, city, addForm } = this.state

            return (
                  <div>

                        {addForm ?
                              <form onSubmit={this.handleSubmit}>
                                    <div>Name</div>
                                    <TextField type="text" name="name" onChange={this.handleChange} value={name} fullWidth required />
                                    <div>Username</div>
                                    <TextField type="text" name="username" onChange={this.handleChange} value={username} fullWidth required />
                                    <div>Email</div>
                                    <TextField type="email" name="email" onChange={this.handleChange} value={email} fullWidth required />
                                    <div>City</div>
                                    <TextField type="text" name="city" onChange={this.handleChange} value={city} fullWidth required />

                                    <Button variant="contained" color="secondary" size="small" onClick={() => this.handleSubmit()}>Add User</Button>

                              </form>
                              :

                              <Button variant="contained" color="secondary" size="small" onClick={() => this.showForm()}>Add User</Button>


                        }



                  </div>




            )
      }
}

export default UserForm;