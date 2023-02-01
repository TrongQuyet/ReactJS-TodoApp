import React from "react";
import './ListTodos.scss'
import  AddTodo from './AddTodo.js'
import {  toast } from 'react-toastify';

class ListTodo extends React.Component {
    state={
        listTodo:[
            {id: 'todo1' ,title:'doing homework1'},
            {id: 'todo2' ,title:'doing homework2'},
            {id: 'todo3' ,title:'doing homework3'}
        ],
        edittodo:{}
    }
    addnewtodo=(todo)=>{
        this.setState({listTodo:[...this.state.listTodo,todo]})
        toast.success("Wow so easy!")
    }
    handledeletetodo=(todo)=>{
        let currenttodo = this.state.listTodo;
        currenttodo=currenttodo.filter(item=>item.id!==todo.id);
        this.setState({listTodo:currenttodo})
        toast.success("xoa thanh cong" )
    }
    handleedittodo=(todo)=>{
        this.setState({
            edittodo:todo
        })
    }
    render() {
        let{listTodo,edittodo} = this.state;
        //let listodo = this.state.listTodo;
        let isemptyojb=Object.keys(edittodo).length === 0;
        return (
            <div className="list-todo-container">
                <AddTodo
                addnewtodo={this.addnewtodo}
                />
                
                <div className="list-todo-content">
                    {listTodo && listTodo.length>0 && listTodo.map((item,index) =>{
                        return(
                            <div className="todo-child" key={item.id}>
                                {isemptyojb==true?
                                <span> {index +1 }-{item.title}</span>
                                :
                                <>
                                <span>{index +1 }-<input value={edittodo.title}/> </span>
                                </>
                                
                            }
                            
                            <button className="edit"
                            onClick={()=>this.handleedittodo(item)}
                            >Edit</button>
                            <button className="delete"
                            onClick={()=>this.handledeletetodo(item)}
                            >Delete</button>
                        </div>

                        )
                    })}
                   
                </div>
                
            </div>
        )
    }
        
}

export default ListTodo;