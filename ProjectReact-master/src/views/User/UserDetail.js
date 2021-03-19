import React, {Component} from 'react';
import UserService from "../../service/user.service";

export default class UserDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user:{}
        }
    }


    async componentDidMount() {
        let {id} = this.props.match.params;
        // console.log(this.props);
        let response = await UserService.detail(id);
        // console.log(response.data);
        this.setState({user:response.data});
    }

    async handleDelete(){
        let {user} = this.state;
        await UserService.delete(user.id);
        this.props.history.push('/utilisateur');
    }

    render() {
        let {user} = this.state;
        return <div className="container">
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            
            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>
        </div>
    }

}