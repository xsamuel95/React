import React, {Component} from 'react';
import TodosService from "../../service/todos.service";

export default class TodosDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await TodosService.detail(id);
        console.log(response.data);
        this.setState({todos: response.data});
    }

    async handleDelete(){
        let {todos} = this.state;
        await TodosService.delete(todos.id);
        this.props.history.push('/liste');
    }

    render() {
        let {todos} = this.state;
        return <div className="container">
            <h1>Liste- {todos.title}</h1>
            <p className="card-title">{todos.completed}</p>
            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>
        </div>
    }
}
