import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Todos extends Component{

    render() {
        let {todos} = this.props;
        console.log(todos)
        return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Titre: {todos.title}</h5>
                    <p className="card-text"> User: {todos.user.name}</p>
                    <p className="card-text"> Completed: {String(todos.completed)}</p>
                    <Link className="btn btn-primary" to={`/liste/${todos.id}`}>Detail</Link>
                    <Link to={`/liste/${todos.id}/ajouter`} className="btn  btn-secondary">Ajouter</Link>
                    <Link to={`/liste/${todos.id}/modifier`} className="btn btn btn-light">Modifier</Link>
                </div>
        </div>
    }
}
