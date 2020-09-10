import React from 'react';
import { Button } from '@material-ui/core';


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            name: this.props.name,
            username: this.props.username,
            email: this.props.email,
            id: this.props.id
        }
    }
    /*

    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editCharacter(this.state)
        this.setState({ editMode: false });
    }


*/
    render() {
        console.log(this.state)
        const { name, username, email, id } = this.state
        return (
            <div>

                <p className="card-title">{name}</p>
                <p className="card-title">{username}</p>
                <p className="card-text">{email}</p>
                <p className="card-text">{id}</p>


                <Button variant="contained" color="secondary" size="small" onClick={() => this.props.deleteCharacter(id)}>Delete</Button>


            </div>
        )
    }
}

export default User;