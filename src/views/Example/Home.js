import React from "react";
import Color from "../HOC/color";
import { connect } from "react-redux";


class Home extends React.Component {  
    handledelete=(item)=>{
        this.props.deleteuserredux(item);
        console.log(item);
    };
    handleadduser=()=>{
        this.props.adduserredux();

    }
    render() {
        console.log(this.props.dataredux)
        let listusers = this.props.dataredux;
        return(
            <>
            <div className="title">
                Chào mừng bạn đến với trang Home
            </div>
            &nbsp;<button onClick={()=>this.handleadduser()}>ADD</button>
            {listusers && listusers.length > 0 && 
            listusers.map((item, index) => {
                return(
                     <div key={item.id} >
                        {index+1}-{item.name}
                        &nbsp;<button onClick={()=>this.handledelete(item)}> delete</button>
                        
                    </div>
                    
                )
                
            })
            }

            </>
            
        )
    }
}
const mapStateToProps = (state)=>{
     return{
         dataredux : state.rootreducers.users
     }
     } 
const mapDispatchToProps = (dispatch)=>{
        return {
            deleteuserredux:(userdelete)=>dispatch({ type: 'DELETE_USER',payload:userdelete}),
            adduserredux:()=>dispatch({ type: 'ADD_USER'})
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(Color(Home));