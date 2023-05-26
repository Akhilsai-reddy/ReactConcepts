import React, {Component} from 'react';

class increment extends Component{
    constructor(props){
        super(props)
    this.state={
      count: 0
    }
}
increase(){
    this.setState({
         count: this.state.count+1
        })
}

decrease(){
    this.setState({
         count: this.state.count-1
        })
    }
render()
{
    return(
        <div>
            <h3>counter:{this.state.count}</h3>
             <button onClick={()=>this.increase()} >increment counter</button>
             <button onClick={()=>this.decrease()} >decrement counter</button>
        </div>
    )
}
}


export default increment