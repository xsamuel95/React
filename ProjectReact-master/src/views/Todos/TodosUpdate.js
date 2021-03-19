import React, {Component} from 'react';
import TodosService from "../../service/todos.service";

export default class TodosUpdate extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: {},
            title: "",
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await TodosService.detail(id);
        this.setState({
            todos: response.data,
            title: response.data.title,
        });
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {todos, title} = this.state;

        let data = {
            title: title,
        }

        await TodosService.update(todos.id, data);
        this.props.history.push(`/liste/${todos.id}`);
    }

    render() {
        let {todos, title} = this.state;
        return <div className="container">
            <h1> {todos.title}</h1>

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" className="form-control" id="title" required value={title} onChange={(e) => this.handleChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Modifier</button>
            </form>


        </div>
    }
}
