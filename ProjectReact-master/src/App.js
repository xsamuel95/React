import './App.css';
import Footer from './component/Footer';
import Header from './component/Header'
import TodosDetail from './views/Todos/TodosDetail';
import React, {Component} from 'react';
import {Route,BrowserRouter, Switch} from 'react-router-dom';
import TodosList from './views/Todos/TodosList';
import UserList from './views/User/UserList';
import UserDetail from './views/User/UserDetail';
import TodosAdd from './views/Todos/TodosAdd';
import TodosUpdate from './views/Todos/TodosUpdate';


export default class App extends Component{
  render(){
    return <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/liste" component={TodosList} />
        
        <Route exact path="/liste/:id" component={TodosDetail} />
        <Route exact path="/liste/:id/ajouter" component={TodosAdd} />
        <Route exact path="/liste/:id/modifier" component={TodosUpdate} />
        <Route exact path="/utilisateur" component={UserList} />
        <Route exact path="/utilisateur/:id" component={UserDetail} />


      </Switch>

      
      <Footer/>
    </BrowserRouter>
  }
}

