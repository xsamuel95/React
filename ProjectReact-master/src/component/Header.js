
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{

    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/liste" className="nav-link">Liste des todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/utilisateur" className="nav-link">Utilisateur</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}
