import React,{Component} from "react";
import axios from 'axios'

import PageHeader from "../template/pageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const URL = 'http://localhost:3000/posts'

export default class Todo extends Component{
  constructor(props){
    super(props)
    this.state = {description: '', list: []}

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.refresh()
  }
  refresh(){
    axios.get(`${URL}?sort=-createdAt`)
        .then(resp => this.setState({...this.state,description: '', list: resp.data}))
  }

  handleChange(e){
    this.setState({...this.state, description: e.target.value})

  }
    handleAdd(){
       const description = this.state.description
       axios.post(URL, {description})
        .then(resp => console.log('funcionou!!!!!!'))
        .catch(respo => console.log('Houve um erro!!!'))
        
   }
   
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description} handleChange={this.handleChange} handleAdd={this.handleAdd}/>
                <TodoList/>
            </div>
        )
    }
}