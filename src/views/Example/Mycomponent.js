import React from "react";
import Child from "./Child";
import AddComponent from "./Addcomponent";
class Mycomponent extends React.Component {
    state = {
        Arr:[
            { id : '1', title:"title1" ,salary:"100"},
            {id : '2',title:"title2" ,salary:"400"},
            {id : '3',title:"title3" ,salary:"500"}
        ]
    }

    addnewjob=(job) => {
        console.log('check job form parent',job)
        this.setState({
            Arr:[...this.state.Arr, job]
        })
    }
    render() {    
        console.log(this.state);
        return (
            <>
                <AddComponent
                addnewjob={this.addnewjob}
                />
                <Child name={this.state.firstName} Arr={this.state.Arr}/>
            </>

        )
    }
}
export default Mycomponent