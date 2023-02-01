import React from "react";
class Child extends React.Component {
   state={
    showjobs: false
   }
   handleshowhide=()=>{
        this.setState({showjobs: !this.state.showjobs});
   }
    render() {

        let {Arr} =this.props;
        let{showjobs} =this.state;
    
        return (
           <>
           {showjobs === false ? <div><button onClick={() => this.handleshowhide()}>show</button></div>
           :
           <>
            <div className="title">{
                Arr.map((item,index) => {
                    if(item.salary>200){
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary} $
                            </div>
                        )
                    }
                    
                })
            }
            </div>
            <div>
            <button onClick={() => this.handleshowhide()}>hide</button>
           </div>
           </>
        }
            </>

        )
    }
}
export default Child