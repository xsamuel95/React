import React, {Component} from 'react';
import User from "../../component/User";
import UserService from "../../service/user.service";

export default class UserList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    async componentDidMount() {
        let users = await UserService.list();
        this.setState({users:users});
    }

    render() {
        let {users} = this.state;
        return <div className="container">
            <div className="row">

                {users.length === 0 && <p>Aucun posts pour le moment...</p>}
  {users.length > 0 && users.map(user => {
                    return <div className="col-md-4">
                        <User user={user}/>
                    </div>
                })}


            </div>

        </div>
    }
}
