import React, {Component} from 'react';
import Todos from "../../component/Todos";
import TodosService from "../../service/todos.service";

export default class TodosList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    async componentDidMount() {
        let todos = await TodosService.list();

        this.setState({todos:todos});
    }
    render() {
        let {todos} = this.state;
        
        return <div className="container">
            <div className="row">

                {todos.map(todo => {
                    return <div className="col-md-4">
                        <Todos todos={todo}/>
                    
                    </div>
                })}

            </div>

        </div>
    }
}
