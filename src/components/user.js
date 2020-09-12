import React from 'react';
import { Button } from '@material-ui/core';
import '../App.css'



class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            name: this.props.name,
            username: this.props.username,
            email: this.props.email,
          //  city: this.props.address.city,
          id: this.props.id
            
        }
    }

    render() {
        console.log(this.state)
        //  city removed from const
        const { name, username, email, id } = this.state
        return (
            <div className='User'>

                <p > Name: {name}</p>
                <p > Username: {username}</p>
                <p > Email: {email}</p>
                {/* <p > City: {city}</p> */}


                {/*  I implement the delete button on every single  User component */}

                <Button variant="contained" color="secondary" size="small" onClick={() => this.props.deleteUser(id)}>Delete</Button>

            </div>
        )
    }
}

export default User;