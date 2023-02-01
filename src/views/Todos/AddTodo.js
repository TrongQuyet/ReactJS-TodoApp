import React from "react";
import {  toast } from 'react-toastify';
class AddTodo extends React.Component{
    state={
        title:''
    }
    handleOnChangeTitle=(event) =>{
        this.setState({title:event.target.value})
    }
    handleAddTodo=() =>{
        if(!this.state.title){
            toast.error("pleass input title!")
            return;
        }
        let todo={
            id: Math.floor(Math.random()*10000),
            title: this.state.title
        }

        this.props.addnewtodo(todo);
        this.setState({title:""})
        
    }
    
    render(){
        let {title} = this.state;
        return (
            <div className="list-todo">
                    <input type="text" name="" value={title} onChange={(event)=>this.handleOnChangeTitle(event)}/>
                    <button type="button" className="add" onClick={()=>this.handleAddTodo()} >
                        
                         add</button>
                    
                </div>
        )
    }
}
export default AddTodo;