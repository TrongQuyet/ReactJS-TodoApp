import React from "react";

class AddComponent extends React.Component {

    state = {
        title:'',
        salary:'',
    }
    handleChangetitle=(event)=>{
        this.setState({title:event.target.value});
    }
    handleChangesalary=(event)=>{
        this.setState({salary:event.target.value});
    }
    handlesubmit=(event)=>{
        event.preventDefault();
        if(!this.state.title||!this.state.salary){
            alert('vui long dien day du thong tin')
            return;
        }
        console.log('state ',this.state); 
        this.props.addnewjob({
            id:Math.floor(Math.random()*1000),
            title:this.state.title,
            salary:this.state.salary

        })
        this.setState({
            title:'',
            salary:''
        })
    }
    render() {
        return (      
            <form >
                <label htmlFor="fname">title:</label><br/>
                <input type="text"  
                value={this.state.title}
                onChange={(event)=>this.handleChangetitle(event)}
                /><br/>
                <label htmlFor="lname">salary:</label><br/>
                <input type="text"  
                value={this.state.salary}
                onChange={(event)=>this.handleChangesalary(event)}
                /><br/><br/>
                <input 
                onClick={(event)=>this.handlesubmit(event)} 
                type="submit" />
                </form>   
        )
    }
}


export default AddComponent