import React, {Component} from 'react';
import TodosService from "../../service/todos.service";

export default class TodosAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: null,
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {title} = this.state;

        let data = {
            title: title,
            userId: 1
        }
    await TodosService.create(data);


     this.props.history.push('/liste');

    }

    render() {
        return <div className="container">
            <h1>Ajouter votre liste</h1>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label>Liste</label>
                    <input type="text" id="title" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    }

}
