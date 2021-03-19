import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class User extends Component{

    render() {
        let {user} = this.props;
        return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <Link className="btn btn-primary" to={`/utilisateur/${user.id}`}>Detail</Link>
                </div>
        </div>
    }
}
