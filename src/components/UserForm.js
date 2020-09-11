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

      addUser = (event) => {
           
            this.setState({ addForm: true });
        }

      render() {
        const  { name, username, email, city, addForm } = this.state

            return (
                  <div>

{addForm ?
                        <form onSubmit={this.handleSubmit}>
                              <div>Name</div>
                              <TextField type="text" name="name" onChange={this.updateFields} value={name} fullWidth required />
                              <div>Username</div>
                              <TextField type="text" name="username" onChange={this.updateFields} value={username} fullWidth required />
                              <div>Email</div>
                              <TextField type="email" name="email" onChange={this.updateFields} value={email} fullWidth required />
                              <div>City</div>
                              <TextField type="text" name="city" onChange={this.updateFields} value={city} fullWidth required />
                        </form>
                        :
                       
                <Button variant="contained" color="secondary" size="small" onClick={() => this.addUser()}>Add user</Button>


}

                        

                  </div>




            )
      }
}

export default UserForm;